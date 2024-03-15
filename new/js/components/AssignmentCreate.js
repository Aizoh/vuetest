export default{
    template:`
    <form @submit.prevent="Add">
    <div class="border border-gray-400">
    <input  v-model="newAssignment" placeholder="New Assignment" class="text-black p-2">
    <button type="submit" class="bg-white text-black p-2 border-l">Add</button>
    </div>
    
    </form>
    `,
    props:{
        assignments:Array
    },
    data(){
        return{
            newAssignment: '',
        }
    },
    methods:{
        Add(){
            //e.preventDefault();
            //alert(this.newAssignment);
            this.$emit('addAssignment', this.newAssignment);

            //clear the input after submission
            this.newAssignment = '';
        }
    }
}