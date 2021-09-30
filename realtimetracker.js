<script>

async function run({
    const location = await getBusLocations();
    console.log(new Date());
    console.log(locations);

    setTimeout(run, 15000);

    async function getBusLocations(){
        const url = 'http://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
        const response = await fetch(url);
        const json = await response.json();
        return json.data;
    }

    run();
</script>