<template>
    <div class="form-container">
        <h1>Add New Data</h1>
        <form action="">
            <div class="form-group">
                <label for="name">Name: </label>
                <input type="text" id="name" v-model="formData.name" required/>
            </div>
            <div class="form-group">
                <label for="price">Price: </label>
                <input type="number" id="price" v-model="formData.price" step="0.01" required/>
            </div>
            <div class="form-group">
                <label for="details">Details: </label>
                <input type="text" id="details" v-model="formData.details" placeholder="Generation: "4th", Price: "419.99","/>
            </div>
            <button type="submit">Add Data</button>
        </form>
    </div>
</template>