<template>
  <div class="form-page">
    <div class="form-part">
      <div class="form-inner">
        <div class="form-logo">
          <a href="/">
            <img src="../assets/img/logo.png" alt="" />
          </a>
          <div class="form-title">
            <h1>Create an acount</h1>
            <div class="subtitle">
              Let`s get started with your 30 day free trial.
            </div>
          </div>
        </div>

        <div class="form-inputs">
          <div
            v-for="errorItem in personalErrors.slice(0, 3)"
            :key="errorItem.$uid"
            class="message error-item"
          >
            <img src="../assets/img/block.png" alt="block" />
            {{ errorItem.$message }}
          </div>
          <div v-if="formSuccess" class="message success-form-message">
            Account created!
          </div>
          <form>
            <TextInput
              v-model="personalInfo.firstName"
              placeholder="First name"
            />
            <TextInput
              v-model="personalInfo.secondName"
              placeholder="Second name"
            />
            <TextInput
              v-model="personalInfo.lastName"
              placeholder="Last name"
            />
            <TextInput v-model="personalInfo.birthday" placeholder="Birthday" />
            <TextInput
              v-model="personalInfo.phoneNumber"
              placeholder="Phone number"
            />
            <SelectInput
              title="Gender"
              :itemsToSelect="gender"
              v-model="personalInfo.genderSelected"
            />
            <SelectInput
              title="Client group"
              :selectedTitle="false"
              :multiple="true"
              :itemsToSelect="clientGroup"
              v-model="personalInfo.clientGroup"
            />
            <CheckboxInput
              title="Send Sms?"
              v-model="personalInfo.canSendSMS"
            />
            <button @click.prevent="submit" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>

    <div class="image-part">
      <div class="image-part-inner"></div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/UI/TextInput.vue"
import SelectInput from "@/components/UI/SelectInput.vue"
import CheckboxInput from "@/components/UI/CheckboxInput.vue"
import { helpers, required } from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core"

export default {
  setup() {
    return { v$: useVuelidate() }
  },

  name: "FormPage",
  components: { CheckboxInput, SelectInput, TextInput },

  data() {
    return {
      personalInfo: {
        firstName: "",
        secondName: "",
        lastName: "",
        birthday: "",
        phoneNumber: "",
        genderSelected: "",
        clientGroup: "",
        doctor: "",
        canSendSMS: "",
      },
      gender: ["Man", "Woman"],
      clientGroup: ["VIP", "Проблемные", "ОМС"],
      doctors: ["Иванов", "Захаров", "Чернышева"],
      personalErrors: [],
      formSuccess: false,
    }
  },

  validations() {
    return {
      personalInfo: {
        firstName: {
          required: helpers.withMessage("First name is required", required),
        },
        secondName: {
          required: helpers.withMessage("Second name is required", required),
        },
        birthday: {
          required: helpers.withMessage("Birthday is required", required),
        },
        phoneNumber: {
          required: helpers.withMessage("Phone number is required", required),
        },
        clientGroup: {
          required: helpers.withMessage("Client group is required", required),
        },
      },
    }
  },

  methods: {
    async submit() {
      await this.v$.$validate()
      this.personalErrors = this.v$.personalInfo.$errors
      this.formSuccess = !this.personalErrors.length
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/screen-sizes";

.form-page {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 50vw;
  margin: 0 auto;
  min-height: 100vh;

  @media screen and (max-width: $xxl-large) {
    width: 30vw;
  }

  @media screen and (max-width: $xl-large) {
    width: 50vw;
  }

  @media screen and (max-width: $x-large) {
    width: 100vw;
  }
}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.form {
  &-part {
    width: 50%;

    @media screen and (max-width: $medium) {
      width: 60%;
    }

    @media screen and (max-width: $small) {
      width: 100%;
    }
  }

  &-inner {
    padding: 50px 70px;

    @media screen and (max-width: $xxl-large) {
      padding: 10px 5px;
    }

    @media screen and (max-width: $medium) {
      padding: 30px 20px;
    }
  }

  &-logo {
    img {
      width: 70px;
      opacity: 0.8;
    }
  }

  &-title {
    text-align: center;
    margin-top: 50px;

    @media screen and (max-width: $medium) {
      margin-top: 30px;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;

      @media screen and (max-width: $medium) {
        font-size: 30px;
      }
    }

    .subtitle {
      font-size: 17px;
    }
  }

  &-inputs {
    width: 80%;
    margin: 20px auto 0;

    @media screen and (max-width: $large) {
      width: 100%;
    }

    @media screen and (max-width: $small) {
      margin: 20% 0;
    }
  }
}

.image-part {
  $padding: 70px;
  width: 50%;

  padding: $padding;

  @media screen and (max-width: $medium) {
    padding: 60px 15px;
    width: 40%;
  }

  @media screen and (max-width: $small) {
    display: none;
  }

  &-inner {
    height: calc(100%);
    background-size: cover;
    background: url("../assets/img/side_photo.jpg") no-repeat center top;
  }
}

button {
  margin-top: 30px;
  align-items: center;
  background-image: linear-gradient(144deg, #9793e7, #e64299 50%, #e97fdc);
  border: 0;
  border-radius: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  color: #ffffff;
  font-size: 16px;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 15px 44px;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    min-width: 196px;
  }
}

.message {
  text-align: center;
  font-size: 16px;
  font-weight: 600;

  position: relative;
  padding: 10px;
  width: 80%;
  border-radius: 5px;
  margin: 10px auto;
  line-height: 20px;

  @media screen and (min-width: $x-large) {
    width: 100%;
  }

  &.error-item {
    border: solid 1px #950000;
    background: #c6002d;
    color: white;
  }

  &.success-form-message {
    color: darkgreen;
    border: solid 1px darkgreen;
  }

  img {
    position: absolute;
    left: 10px;
    width: 20px;
    opacity: 0.9;
  }
}
</style>
