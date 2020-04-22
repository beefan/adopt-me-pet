<template lang="pug">
  b-container#what
    h1 What do we do?
    b-row
      b-col(lg="4")
        b-img(src="https://placekitten.com/400/500")
      b-col(lg="8")
        p Dog Breeds, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Fusce ut placerat orci nulla pellentesque dignissim enim. Ante in nibh mauris cursus mattis molestie a iaculis. 
        b-table(striped hover :items="items" :fields="fields")
</template>
<script>
export default {
  data() {
    return {
      dogDataApi: 'https://dog.ceo/api/breeds/list/all',
      fields: [
        {
          key: "breed_name",
          label: "Breed",
          sortable: true
        },
        {
          key: "num_sub_breeds",
          label: "# of sub breeds",
          sortable: true
        }
      ],
      items: [
        { breed_name: "ex", num_sub_breeds: 3},
        { breed_name: "ex", num_sub_breeds: 3}
      ]
    };
  },
  methods: {
    getDogBreedData() {
      fetch(this.dogDataApi)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.setTableItemsFromDogData(data);
        })
        .catch(err => {
          console.error(err);
        });
    },
    setTableItemsFromDogData(data) {
      this.items = []
      Object.keys(data.message).forEach( (key) => {
        let name = key.substring(0,1).toUpperCase() + key.substring(1);
        this.items.push({breed_name: name, num_sub_breeds: data.message[key].length});
      });
    }
  },
  created() {
    this.getDogBreedData();
  }
};
</script>
<style lang="sass">
#what
  margin: 0
  padding: 0
  margin-top: 10vw
  margin-bottom: 5%
  margin-left: auto
  margin-right: auto
  box-shadow: 2px 2px 5px grey, -2px -2px 10px #A9A9A9
  h1
    font-size: 1.5rem
    text-align: center
    font-weight: bolder
    color: white
    width: 100%
    padding: 10%
  img
    width: 100%
    border-radius: 5px
    padding: 3%
  p
    padding: 3%
</style>
