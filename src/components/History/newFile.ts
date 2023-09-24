import { startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { watch } from 'vue';
import { props, days } from './TheCalendar.vue';

watch(() => props.car, (newVal) => {
//   days.value =  eachDayOfInterval({
//   start: new Date(newVal.start_day),
//   end: new Date(newVal.end_day)
// })
const start = startOfMonth(new Date(newVal.start_day));
const end = endOfMonth(new Date(newVal.end_day));
days.value = eachDayOfInterval({ start: new Date(newVal.end_day), end: new Date(newVal.start_day) });
console.log(new Date(newVal.start_day));
console.log(new Date(newVal.end_day));

console.log(days.value);

});
