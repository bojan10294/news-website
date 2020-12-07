<template>
  <footer>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <img src="../assets/logo_asioso.png" alt="" />
          <p>
            asioso Blog is a technology blog. We make digital business simple.
          </p>
          <div>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-google-plus-g"></i>
            <i class="fab fa-pinterest"></i>
          </div>
          <div>
            <b-input-group
                class="mb-3"
            >
                <b-form-input placeholder="Enter your email address" class="input"></b-form-input>
                <b-input-group-append>
                <b-button text="Button" variant="success" class="btn">Submit</b-button>
                </b-input-group-append>
            </b-input-group>
            </div>
        </b-col>
        <b-col offset-md="1">
          <div>
            <b-table borderless small hover :items="items"></b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
      return {
        items: [
          { popular_categories: 'Marketing', copyrights: 'About Us' },
          { popular_categories: 'SEO Service', copyrights: 'Advertising' },
          { popular_categories: 'Digital Agency', copyrights: 'Write For Us' },
          { popular_categories: 'Make Money', copyrights: 'Trademark' },
          { popular_categories: 'Blogging', copyrights: 'Licence & Help' }
        ]
      }
    }
}
</script>

<style lang="scss">
footer {
  background: #000;
  padding: 40px 0;
  text-align: left;

  img {
    width: 120px;
    margin-bottom: 20px;
  }
  p{
    color:#989898;
    font-size: 13px;
    margin-bottom: 20px;
  }
  i {
    font-size: 25px;
    color:#989898;
    margin-right: 10px;
    margin-bottom: 30px;
  }
  .input{
      border-radius: 0;
      margin-right: 7px;
      height: 50px;
      background-color: #E5E5E5;
      color:#989898;
      font-weight: 700;
      font-size: 14px;
  }
  .btn{
      background-color: #93bd32 !important;
      border: 1px solid #93bd32;
      border-radius: 0;
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      padding: 0 20px;
      &:hover{
      border: 1px solid #749626;
      background-color: #749626 !important;
      }
  }
}
.table-borderless td{
  color:#bbbbbb !important;
  font-size: 13px;
  cursor: pointer;
}
.table-borderless th{
  color:#bbbbbb !important;
  font-size: 14px;
}
</style>
