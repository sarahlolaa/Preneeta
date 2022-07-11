<template>
    <section class="w-1/4 max-h-screen px-6 py-4 bg-gray-300">
        <div>
            <img/>
            <h1 class="uppercase my-2">prenetaa</h1>
        </div>
        <div>
            <img/>
            <router-link to="/home" class="uppercase text-sm">home</router-link >
        </div>
        <div>
            <img/>
            <ul class="uppercase text-sm my-2">
            subjects
            <li>
                <router-link to="/subject/mathematics" class="uppercase text-xs ml-2 my-3">mathematics</router-link>
            </li>
            
            <li>
                <router-link to="/subject/english" class="uppercase text-xs ml-2 my-3">english</router-link>
            </li>
            <li v-for="subject in subjects"
                :key="subject.id">
                <router-link to="/subject" class="uppercase text-xs ml-2 my-3">{{subject.subject}}</router-link>
            </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            subjects: [
                {id: 1, subject: "chemistry"},
                {id: 2, subject: "biology"},
                {id: 3, subject: "physics"},
                {id: 4, subject: "CRS"},
                {id: 5, subject: "Technical Drawing"}
            ]
        }
    }
};
</script>