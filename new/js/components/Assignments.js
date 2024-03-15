import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
    <section class="space-y-6">
    <assignment-list :assignments="filters.uncompletedAssignments" title="Un Completed Assignments"></assignment-list>
    <assignment-list :assignments="filters.completedAssignments" title="Completed Assignments"></assignment-list>
    <assignment-create @addAssignment ="Add"></assignment-create>

    
    </section>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish work', complete: false, id: 1 , tag: 'maths'},
                { name: 'Make dishes', complete: false, id: 2 , tag: 'science'},
                { name: 'do laundry', complete: false, id: 3 , tag: 'maths'},
                { name: 'fishing', complete: false, id: 4 , tag: 'history'},
            ],

        };
    },
    computed: {
        
        filters(){
            return{
                completedAssignments: this.assignments.filter(assignment => assignment.complete),
                uncompletedAssignments: this.assignments.filter(assignment => !assignment.complete)
            }
        }
    },
    
    methods: {
        Add(name){
            //e.preventDefault();
            //alert(this.newAssignment);
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length +1
            });

            //clear the input after submission
            this.newAssignment = '';
        }
    }


}