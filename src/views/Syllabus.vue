<script>
import { usePDF, VuePDF } from "@tato30/vue-pdf";

export default {
  components: {
    VuePDF,
  },
  setup() {
    const { pdf } = usePDF("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf");
    return {
      pdf
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>Syllabus Page</h1>

    <VuePDF :pdf="pdf"></VuePDF>
  </div>
</template>


