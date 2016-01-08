'use strict';

$(function() {
  $('input, textarea').jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {

    },
    submitSuccess: function($form, event) {
      event.preventDefault();
      var firstName = $('input#name').val();

      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      $.ajax({
        type: 'POST',
        url: '/contact',
        data: $('#contact-form').serialize(),
        cache: false,
        success: function() {
          $('#success').html('<div class="alert alert-success">');
          $('#success > .alert-success').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;')
            .append("</button>");
          $('#success > .alert-success')
            .append('<strong>Your message has been sent. </strong>');
          $('#success > .alert-success')
            .append('</div>');

          $('#contact-form').trigger('reset');
        },
        error: function() {
          // Fail message
          $('#success').html('<div class="alert alert-danger">');
          $('#success > .alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;')
            .append('</button>');
          $('#success > .alert-danger').append('<strong>Sorry ' + firstName + ', it seems that my mail server is not responding. Please try again later!');
          $('#success > .alert-danger').append('</div>');

          $('#contact-form').trigger('reset');
        },
      })
    },

    filter: function() {
      return $(this).is(':visible');
    },
  });

  $('a[data-toggle=\'tab\']').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });
});

$('#name').focus(function() {
  $('#success').html('');
});
