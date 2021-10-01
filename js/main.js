Vue.component('activity-item', {
    template: `
    <li v-bind:style="checked ? 'backgroundColor: lightgreen':'backgroundColor: lightblue'">
    <input type="checkbox" v-on:click="$emit('finished')" v-model="checked">
    {{ title }}
    <p>{{ time }}</p>
    <button v-on:click="$emit('remove')">Remove</button>
    </li>
    `,
    props: ['title', 'finished', 'checked', 'time']
})

new Vue({
    el: '#schedule',
    data: {
        week: 'Week 1',
        weekNumber: 1,
        headline: 'Add activity',
        showDropdownBool: false,
        newActivityName: '',
        newTime: '',
        newDay: '',
        activities:
            [{
                id: 1,
                title: 'Swimming',
                day: 'Mon',
                time: '07:00',
                bgColor: 'lightblue'
            }],
        weekdays: ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        timeFrame: ['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','16:00','17:00','18:00','19:00','20:00'],
        nextActivityId: 2
    },
    methods: {
        addNewActivity: function () {
            this.activities.push({
                id: this.nextActivityId++,
                title: this.newActivityName,
                day: this.newDay,
                time: this.newTime,
                bgColor: 'lightblue'
            })
            this.newActivityName = ''
            // this.newTimeStamp = ''
        },
        changeWeekNumberDown: function () {
            if (this.weekNumber > 1) {
                this.weekNumber--;
                this.week = 'Week ' + this.weekNumber;
            }
        },
        changeWeekNumberUp: function () {
            if (this.weekNumber < 52) {
                this.weekNumber++;
                this.week = 'Week ' + this.weekNumber;
            }
        }
    }
})

var modal = document.getElementById('addEvent');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
