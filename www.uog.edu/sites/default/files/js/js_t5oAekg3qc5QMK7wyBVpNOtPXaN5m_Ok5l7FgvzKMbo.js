(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Provides responsive menu toggle and dropdown functionality.
 */

(function ($) {
  Drupal.behaviors.responsiveDropdownMenuToggle = {
    attach: function(context, settings) {

      var responsiveDropdownMenus = Drupal.settings.responsive_dropdown_menus;
      var menuToggleHelper = Drupal.t('Menu');

      // Cycle through responsive dropdown menu blocks.
      $('.responsive-menu', context).each(function(index) {
        var menuID = $(this).attr('id');

        // Check if delta equals the element's ID.
        $.each(responsiveDropdownMenus, function(delta, title) {
          if(delta == menuID) {
            menuToggleHelper = title;
          }
        });
        if(!$(this).prev().hasClass('menu-toggle')) {
          // Drop in our menu toggle.
          var title = Drupal.t('Toggle Menu');
          $(this).before('<a class="menu-toggle" title="' + title + '"><span class="lines"><span class="line first-line first"></span><span class="line"></span><span class="line last-line last"></span></span><span class="toggle-help">' + menuToggleHelper + '</span></a>');
        }
      });

      // Bind click event to toggle.
      $('.menu-toggle').click(function(){
        $(this).next().toggleClass('menu-toggled');
      });
    }
  };

  Drupal.behaviors.responsiveDropdownMenuDropDown = {
    attach: function(context) {
      $('.responsive-menu li.menu-parent').hover(
        function() {
          $(this).children('.sub-menu').addClass('active');
        },
        function() {
          $(this).children('.sub-menu').removeClass('active');
        }
      );
    }
  }
})(jQuery);
;
