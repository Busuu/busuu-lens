import html from 'choo/html'

export default (state, prev, send) =>
  html`
    <section id="main-view" class="">

        <h4 class="lang-select" onclick=${_ => send('showList')}>
          Translate to: ${state.activeLang}
        </h4>
      ${
        !state.firstTime && state.translation
        ? html`
          <div class="row">
            <h2>${state.translation}</h2>
          </div>
        `
        : null
      }
      ${
        !state.firstTime && state.label
        ? html`
          <div class="row">
            <h2>${state.label}</h2>
          </div>
        `
        : null
      }
      ${
        state.cameraReady
        ? html`
          <div
            id="shutter-button"
            class="${state.isSnapping ? 'busy' : ''}"
            onclick=${_ => send('snap')}>
          </div>
        `
        : null
      }
      ${
        state.firstTime && state.cameraReady
        ? html`<h5 id="first-time">Take a pic of something to get started!</h5>`
        : null
      }
      <div class="debug">${state.guesses}</div>
      <div>${console.log(state.activeLang)}</div>
    </section>
  `
