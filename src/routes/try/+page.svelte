<script>
    import Card from "../../components/card.svelte";
</script>

<section class=" bg-black h-screen w-fit flex justify-center items-center gap-3">
    <Card
        title="Frontend Master class"
        description="Some random thing some random thing yada yada blah blah ugabuga type shit"
        badgeA="UI"
        badgeB="Frontend"
        isNew
        imgPadding="p-8 pt-19"
    />
    <Card
        title="Frontend Master class"
        img="/assets/iot.svg"
        description="Some random thing some random thing yada yada blah blah ugabuga type shit"
        badgeA="UI"
        badgeB="Frontend"
        color="bg-blue-200"
    />
    <Card
        title="Frontend Master class"
        img="/assets/chatbot_robot.svg"
        description="Some random thing some random thing yada yada blah blah ugabuga type shit"
        badgeA="UI"
        badgeB="Frontend"
        color="bg-rose-200"
        imgPadding="p-8"
    />
    <Card
        title="Frontend Master class"
        img="/assets/frontend.svg"
        description="Some random thing some random thing yada yada blah blah ugabuga type shit"
        badgeA="UI"
        badgeB="Frontend"
        color="bg-rose-200"
        imgPadding="p-8"
    />
</section>
