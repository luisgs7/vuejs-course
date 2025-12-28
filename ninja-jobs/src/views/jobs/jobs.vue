<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>

</template>

<script>
    export default {
        name: 'Jobs',
        data() {
            return {
                jobs: [
                    { id: 1, title: 'Web Developer', location: 'New York', salary: 100000 },
                    { id: 2, title: 'Frontend Developer', location: 'San Francisco', salary: 120000 },
                    { id: 3, title: 'Backend Developer', location: 'Chicago', salary: 110000 },
                    { id: 4, title: 'Full Stack Developer', location: 'Boston', salary: 130000 },
                    { id: 5, title: 'Software Engineer', location: 'Los Angeles', salary: 140000 },
                    { id: 6, title: 'Database Administrator', location: 'Seattle', salary: 150000 },
                    { id: 7, title: 'Network Engineer', location: 'Miami', salary: 160000 },
                    { id: 8, title: 'System Administrator', location: 'Austin', salary: 170000 },
                ]
            }
        }
    }
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover {
    background: #ddd;
}

.job a {
    text-decoration: none;
}
</style>