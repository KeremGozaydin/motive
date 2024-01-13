<script lang="ts">
    import Quotes from '../lib/newQuotes.json'

    interface Quote {
        id: number;
        quote: string;
    }

    let capitalizeFirstLetter = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    let quote: any;

    let getRandomQuote = () => {
        quote = Quotes[Math.floor(Math.random() * Quotes.length)];
    }

    getRandomQuote();

    setInterval(() => {
        getRandomQuote();
    }, 10000);
</script>

<div class='flex justify-center items-center w-full sm:w-2/3 m-auto'>
    {#if quote}
        <div class='container card flex flex-col variant-outline-primary w-fit p-4'>
            <i>{capitalizeFirstLetter(quote.category)}</i>
            <h3 class='h3 text-center'>{quote.quote}</h3>
        </div>
    {:else}
        <h3 class='h3 text-center'>Loading...</h3>
    {/if}
</div>