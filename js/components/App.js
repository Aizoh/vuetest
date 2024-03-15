export default {

    template: `
    <section v-show="uncompletedAssignments.length">
    <h2 class= "font-bold mb-2">Assignments</h2>

    <ul>
        <label>
            <li v-for="assignment in uncompletedAssignments" :key="assignment.id">{{assignment.name}}<input  type= "checkbox" v-model="assignment.complete"></li>                </label>
    </ul>
  </section>
  <section v-show="completedAssignments.length">
    <h2 class= "font-bold mb-2 mt-8"> Completed Assignments</h2>

    <ul>
        <label>
        <li v-for="assignment in completedAssignments" :key="assignment.id">{{assignment.name}}<input  type= "checkbox" v-model="assignment.complete"></li>
        </label>
    </ul>
  </section>`,

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
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        },
        uncompletedAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        }
    }

}
