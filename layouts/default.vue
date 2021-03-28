<template>
  <div>
    <Header />
    <div class="mainContent">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&display=swap');

html {
  font-family: 'Kiwi Maru', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  color: #333;
  background-color: #f7f7f7;
  min-height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.mainContent {
  padding: 40px 16px;
  min-height: calc(100vh - 360px);
} 

.container {
  max-width: 720px;
  margin: 0 auto;
}

button,input,textarea {
  font-family: 'Kiwi Maru', serif;
  cursor: pointer;
  outline: none;
}

.button {
  font-size: 1rem;
  font-family: 'Kiwi Maru', serif;
  border-radius: 30px;
  padding: 16px;
  display: block;
  color: #333;
  border: 1px solid #333;
  background-color: transparent;
  transition: .3s;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #333;
    color: #fff;
  }
}

.labelGroup {
    display: block;
    margin-bottom: 1rem;
}

.formLabel {
  margin-bottom: 1rem;
  display: block;
}

.formInput {
  width: 100%;
  font-size: 18px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
}
.formTextarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  resize: vertical;
}

</style>
