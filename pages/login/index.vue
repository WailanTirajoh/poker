<script setup lang="ts">
import { signInWithRedirect, GoogleAuthProvider, signInAnonymously, signOut } from 'firebase/auth';

useHead({
    title: 'Login'
})

const auth = useFirebaseAuth();
const googleAuthProvider = new GoogleAuthProvider()

const user = useCurrentUser();
</script>
<template>
    <div>
        <template v-if="user">
            You are already logged in as {{ user.displayName || 'Anonymous' }}


            <button @click="signOut(auth)">
                Logout
            </button>
        </template>
        <template v-else>
            <button @click="signInWithRedirect(auth, googleAuthProvider)">
                Login With Google
            </button>
            <button @click="signInAnonymously(auth)">
                SignIn Anonymously
            </button>
        </template>
    </div>
</template>