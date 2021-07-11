<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      code: "",
    };
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;
          console.log("nickname", nickname);
          console.log("email", email);
          alert("로그인 성공!");
        },
        fail: (error) => {
          // this.$router.push("/errorPage");
          console.log(error);
        },
      });
    },
    // kakaoLogout() {
    //   if (!window.Kakao.Auth.getAccessToken()) {
    //     console.log("Not logged in.");
    //     return;
    //   }
    //   window.Kakao.Auth.logout((response) => {
    //     //로그아웃
    //     console.log("access token:", window.Kakao.Auth.getAccessToken());
    //     console.log("log out:", response);
    //   });
    // },
  },
};
</script>