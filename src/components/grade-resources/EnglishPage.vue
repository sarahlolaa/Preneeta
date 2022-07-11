<template>
  <div class="min-w-min p-4">
    <keep-alive>
    <base-card>
      <div>
        <h5 class="mb-4 text-xl font-bold leading-none text-gray-900 dark:text-white">Assessment Card</h5>
        <div class="flex justify-content items-center mb-4">
            <div class="flex-shrink-0">
                            <!-- <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> -->
            </div>
            <p class="w-40 mr-5 truncate">Student Name</p>
            <ul class="flex">
              <li v-for="n in assessmentsNo"
                  :key="n" 
                  class="w-16 flex justify-around items-center list-none">
              <span>
                <span>{{n}}</span><sup>{{toOrdinalSuffix(n)}}</sup>CA
              </span>
              </li>
            </ul>
            <p class="w-16 flex justify-around items-center">Exam</p>
            <p class="w-16 flex justify-around items-center">Total</p>
            <p class="w-16 flex justify-around items-center">Grade</p>
        </div>
        <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="student, index in students"
                    :key="index"
                    class="relative py-3 sm:py-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <!-- <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> -->
                        </div>
                        <div class="w-40 mr-5">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {{student.name}}
                          </p> 
                        </div>
                        <ul class="flex">
                          <li v-for="n in assessmentsNo" 
                                :key="n"
                                class="w-16 flex justify-around items-center border-gray-200 dark:border-gray-700 border-l-2 list-none">
                            <input type="number" :name="'ca-'+ n + '-'+ index" :id="'ca-'+ n + '-'+ index" 
                                v-model="student.CAs[n-1]"
                                placeholder="0"
                                @focus="calculateTotal(''+index)"
                                class="w-full outline-none border-0 text-sm text-center"/>
                          </li>
                        </ul>
                        <div class="w-16 flex justify-around items-center border-gray-200 dark:border-gray-700 border-l-2">
                          <input type="number" :name="'exam-'+ index" :id="'exam-'+ index" placeholder="0"
                          class="w-full outline-none border-0 text-sm text-center"/>
                        </div>
                        <div class="w-16 flex justify-around items-center border-gray-200 dark:border-gray-700 border-l-2">
                          <input type="number" :name="'total-'+ index" :id="'total-'+ index" placeholder="0"
                          v-model="totals[index]"
                          class="w-full outline-none border-0 text-sm text-center"/>
                        </div>
                        <div class="w-16 flex justify-around items-center border-gray-200 dark:border-gray-700 border-l-2">
                            <input type="text" :name="'grade-'+ index" :id="'grade-'+ index" 
                              placeholder="-" readonly="readonly"
                              v-model="grades[index]"
                            class="w-full outline-none border-0 text-sm text-center"/>
                        </div>
                        <div class="ml-8 flex gap-x-6">
                          <base-button @click="addValues(index)">
                            <span>Add</span>
                          </base-button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
         
      </div>
    </base-card>
    </keep-alive>
  </div>
</template>

<script>
// import RecordSubject from "./RecordSubject.vue"
export default {
    components: {
        // RecordSubject
	},
  data(){
    return {
    //   students: ['Neil Sims', 'Bonnie Green', 'Michael Gough', 'Lana Byrd', 'Thomes Lean'],
      students: [
        {
            name: 'Neil Sims',
            CAs: {CA1: 0, CA2: 0, CA3: 0, CA4: 0, Exam: 0}
        }, 
        {
            name: 'Bonnie Green', 
            CAs: {CA1: 0, CA2: 0, CA3: 0, CA4: 0, Exam: 0}
        },
        {
            name: 'Michael Gough', 
            CAs: {CA1: 0, CA2: 0, CA3: 0, CA4: 0, Exam: 0}
        }, 
        {
            name: 'Lana Byrd', 
            CAs: {CA1: 0, CA2: 0, CA3: 0, CA4: 0, Exam: 0}
        },
        {
            name: 'Thomes Lean', 
            CAs: {CA1: 0, CA2: 0, CA3: 0, CA4: 0, Exam: 0}
        }
      ],
      showModal: false,
      assessmentsNo: 4,
      studentValues: [],
      score: [],
      scores: ['F', 'F', 'F', 'F', 'F', 'E', 'D', 'C', 'B', 'A'],
      totals: {},
      positions: [],
      grades: {}
    }
  },

  watch: {
  },

  computed: {
  },

  methods: {
    toOrdinalSuffix(num) {
      const digits = [num % 10, num % 100];
      const ordinals = ['st', 'nd', 'rd', 'th'];
      const oPattern = [1, 2, 3, 4];

      const value = oPattern.includes(digits[0]) ? ordinals[digits[0] - 1] + ' ' : ordinals[3] + ' ';
        return value 
     
    },

    calculateTotal(activeStudent) {
      console.log(activeStudent);
    },

    addValues(index) {
        var sum = 0;
        for (let values in this.students[index]['CAs']) {
            sum += this.students[index]['CAs'][values];
        }
        
        if (sum < 0 || sum > 100) {
            console.log('wrong value')
        }
        else {
            this.totals[index] = sum;

            sum = Math.floor(sum/10) 
            var grade = this.scores[sum]

            this.grades[index] = grade
        }
    },
  }
}
</script>

<style>
input[type=number] {
  -moz-appearance: textfield;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>