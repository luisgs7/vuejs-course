<template>
    <div class="project" :class="{ complete: project.completed }">
        <div class="actions">
            <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
            <div class="icons">
                <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
                    <span class="material-symbols-outlined material-icons">edit</span>
                </router-link>
                <span @click="deleteProject" class="material-symbols-outlined material-icons">delete</span>
                <span @click="toggleComplete" class="material-symbols-outlined material-icons"
                    :class="{ tick: project.completed }">done</span>
            </div>
        </div>
        <div class="details" v-if="showDetails">
            <p>{{ project.details }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetails: false,
            uri: 'http://localhost:3000/projects/' + this.project.id
        }
    },
    methods: {
        deleteProject() {
            fetch(this.uri, { method: 'DELETE' })
            .then(() => {
                this.$emit('delete', this.project.id)
                console.log('project deleted')
                console.log(this.project.id)
            })
            .catch(error => console.log(error.message))
        },
        toggleComplete() {
            fetch(this.uri, { method: 'PATCH', body: JSON.stringify({ completed: !this.project.completed }), headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                this.$emit('complete', this.project.id)
            })
            .catch(error => console.log(error.message))
        }
    }
}
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 4px solid #e90074;
}

h3 {
    cursor: pointer;
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}

.material-icons:hover {
    color: #777;
}

.project.complete {
    border-left: 4px solid #00ce89;
}

.project.complete .tick {
    color: #00ce89;
}
</style>