<script>
$(function () {
  $('.footnotes').addClass('collapse');

  $('.footnote').on('click', function () {
    $('.footnotes').collapse('show');
  });

  $('.footnotes').on('shown.bs.collapse', function () {
    console.log($('.footnotes-header.toggleable-chevron'));
    $('.toggleable-chevron').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
  });

  $('.footnotes').on('hidden.bs.collapse', function () {
    $('.toggleable-chevron').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
  });
});
</script>
