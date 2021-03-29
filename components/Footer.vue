<template>
  <div>
    <div class="siteDesc">
      <div class="container">
        <div class="siteDesc__inner">
          <div class="siteDesc__image">
            <img src="/tamtam.png" alt="たむたむ">
          </div>
          <p class="siteDesc__text">
            ここは超個人的なうさぎグッズレビューサイトです。<br>
            管理人は都内でWEBデザイナーをしているおっさんです。<br>
            ネザーランドドワーフの「たむたむ」と暮らしています。
          </p>
        </div>
      </div>
    </div>
    <footer class="footer">
      <a href="https://myscreate.com/" target="_blank" rel="noopener noreferrer">
        <img src="/logo_footer.svg" alt="ma-ya's CREATE">
      </a>
      <small>© Copyright {{new Date().getFullYear()}} │ ma-ya's CREATE All rights reserved.</small>
    </footer>
  </div>
</template>
 
<style lang="scss" scoped>
.siteDesc {
  margin-bottom: 80px;
  .container {
    padding: 0 1rem;
  }
  .siteDesc__inner {
    display: flex;
    padding: 24px;
    border: 4px solid #eaeaea;
    border-radius: 1rem;
  }
  .siteDesc__image {
    flex: 0 0 70px;
    margin-right: 24px;
    img {
      width: 100%;
      height: auto;
    }
  }
}

.footer {
  padding: 1rem;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: block;
    img {
      width: 80px;
    }
  }
  small {
    color: #fff;
    font-size: .5rem;
  }
}

@media screen and (max-width: 600px) {
  .siteDesc {
    .siteDesc__inner {
      flex-direction: column;
      align-items: center;
    }
    .siteDesc__image {
      width: 70px;
      margin: 0 0 1rem;
    }
  }
}

</style>