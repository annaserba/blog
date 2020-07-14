<template>
  <div>
    <div :id="id" class="litres_widget_body" :book="book" style="width: 510px; height: 420px;" />
    <script>
      var litres_widget_book_view_id = document.getElementsByClassName("litres_widget_body")[0].getAttribute("book");
      var litres_widget_lfrom = document.getElementsByClassName("litres_widget_body")[0].getAttribute("id");;
      (function(d, t){var lw = d.createElement(t),s = d.getElementsByTagName(t)[0];lw.async = 1;lw.src = "https://www.litres.ru/static/widgets/js/widget.js";s.parentNode.insertBefore(lw, s);})(document, "script");
    </script>
  </div>
</template>
<script>
export default {
  data () {
    return {
      book: this.$route.params.book,
      id: this.$route.params.id
    }
  }
}
</script>
<style scoped>
html,body{
    overflow: hidden;
}
</style>
