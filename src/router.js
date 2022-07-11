import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/grade-resources/HomePage.vue";
import SubjectPage from "./components/grade-resources/SubjectPage.vue";
import MathsPage from "./components/grade-resources/MathsPage.vue";
import EnglishPage from "./components/grade-resources/EnglishPage.vue";


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/home" },
		{ name: "home", path: "/home", component: HomePage },
		{ name: "subject", path: "/subject", component: SubjectPage },
		{ name: "maths", path: "/subject/mathematics", component: MathsPage },
		{ name: "english", path: "/subject/english", component: EnglishPage },
		// { name: 'subject', 
        //   path: '/subject/:id',
        //   meta: { needsAuth: true }, 
        //     components: { default:SubjectPage},
        //     children: [
        //     { name: '', path: ':subjectId', component: RecordSubject, props: true }
        // ] },
	],
});

export default router;
