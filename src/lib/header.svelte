<script lang="ts">
    import {AppBar} from '@skeletonlabs/skeleton';
    import { signInWithPopup } from 'firebase/auth';
    import { auth, provider, user } from '../lib/firebase';
    import Icon from '@iconify/svelte';
</script>

<AppBar>
    <svelte:fragment slot='lead'>
        {#if $user}
            <h2>Welcome, {$user.displayName?.split(' ')[0]}</h2>
        {:else}
            <h2>Not signed in</h2>
        {/if}
    </svelte:fragment>
    <svelte:fragment slot='trail'>
        <div class='flex flex-row gap-2 pr-2'>

            <a href='/profile' class='btn-icon variant-filled'>
                {#if $user}
                    <img src={$user.photoURL} alt='user avatar' class='rounded-full' />
                {:else}
                    <Icon class='w-8 h-8' icon="mdi:user-outline"  />
                {/if}
            </a>
        </div>
    </svelte:fragment>
</AppBar>