import firebase from "firebase";

export function addUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function loginUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function createUserData(name, email, age, isAdmin) {
    const users = firebase.database().ref("users");
    const user = users.push();
    user.set({
        username: name,
        email: email,
        age: age,
        isAdmin: isAdmin,
        id: user.key,
    });
}

export function updateUserData(userId, email, name, age, isAdmin) {
    const user = firebase.database().ref("users/" + userId);
    user.set({
        id: userId,
        email: email,
        username: name,
        age: age,
        isAdmin: isAdmin,
    });
}

export async function getAllUsers() {
    const res = await firebase.database().ref("users").get();
    return Object.values(res.val());
}

export function deleteUserData(userId) {
    firebase.database().ref("users/" + userId).remove();
}
