<template>
  <div class="p-3">
    <h3>Лексияҳо</h3>

    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(_, index) in Array(15)" :key="index">
        <h2 class="accordion-header" :id="'heading'+index">
          <button class="accordion-button" :class="{ 'collapsed': index !== 0 }" type="button" data-bs-toggle="collapse"
                  :data-bs-target="'#collapse'+index" aria-expanded="true" :aria-controls="'collapse'+index">
            Рузи {{ index + 1 }}
          </button>
        </h2>
        <div :id="'collapse'+index" class="accordion-collapse collapse" :class="{ 'show': index === 0 }"
             :aria-labelledby="'heading'+index" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
            <br><br>

            <a href="../assets/files/lecture.rar" download>
              Сабт кардан
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-cloud-download-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
