import AssignmentList from "./AssignmentList.js";
export default {
    components: { AssignmentList },
    template: `
    <section class="space-y-6">
    <assignment-list :assignments="filters.uncompletedAssignments" title="Un Completed Assignments"></assignment-list>
    <assignment-list :assignments="filters.completedAssignments" title="Completed Assignments"></assignment-list>
    </section>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish work', complete: false, id: 1 },
                { name: 'Make dishes', complete: false, id: 2 },
                { name: 'do laundry', complete: false, id: 3 },
                { name: 'fishing', complete: false, id: 4 },
            ]
        };
    },
    computed: {
        
        filters(){
            return{
                completedAssignments: this.assignments.filter(assignment => assignment.complete),
                uncompletedAssignments: this.assignments.filter(assignment => !assignment.complete)
            }
        }
    }

}