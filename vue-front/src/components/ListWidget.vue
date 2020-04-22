<template lang="pug">
    div#list-container
        header#list-header
            h1.list-label#lhp(@click="changeTab" :class="selectedTab === 'programs' ? 'select-tab' : 'unselect-tab'") PROGRAMS 
            h1.list-label#lhc(@click="changeTab" :class="selectedTab === 'companies' ? 'select-tab' : 'unselect-tab'") ASSOCIATED COMPANIES
        div(v-if="selectedTab === 'programs'")
            b-container.list-info(v-for="program in programs" v-bind:key="program.name")
                b-row
                    b-col(sm="2")
                        img(:src="program.logoUrl")
                    b-col(sm="10")
                        h1 {{ program.name }}
                        p {{ program.desc }}
        div(v-if="selectedTab === 'companies'")
            b-container.list-info(v-for="company in companies" v-bind:key="company.name")
                b-row
                    b-col(sm="2")
                        img(:src="company.logoUrl")
                    b-col(sm="10")
                        h1 {{ company.name }}
                        p {{ company.desc }}
</template>

<script>
export default {
    methods: {
        changeTab(event){
            if (event.target.id === "lhp" && this.selectedTab != 'programs') {
                this.selectedTab = 'programs'
            }else if (event.target.id === "lhc" && this.selectedTab != 'companies'){
                this.selectedTab = 'companies'
            }
        }
    },
    data() {
        return {
            selectedTab: 'programs',
            programs: [
                    {
                        name: "Behavior Program",
                        logoUrl: "/../assets/img/friend-in-trouble.png",
                        desc: "Evaluation of each dog using specialists who determine the best training that will help your friend be a better family member."
                    },
                    {
                        name: "My Next Family",
                        logoUrl: "http://placekitten.com/300/300",
                        desc: "Are you looking for a new family member? Then, this program is for you. Don't buy, adopt here, and let's give a home to these amazing friends!"
                    }
            ],
            companies: [
                {
                    name: "Pet Food Unlimited",
                    logoUrl: 'http://placekitten.com/200/300',
                    desc: "Pet food unlimited donates over 3000 pounds of food to our shelter every year!"
                },
                {
                    name: "Foster Friends",
                    logoUrl: 'http://placekitten.com/200/300',
                    desc: "A non-profit organization that helps to pair animal up for adoption with the right foster homes while they wait."
                }
            ]
        }
    }
}
</script>

<style lang="sass">
#list-container
    width: 100%
    border: 2px solid black
#list-header
    display: flex
    flex-flow: row
.unselect-tab:hover 
    background-color: rgba(0,0, 255, 0.2)
    color: white
</style>