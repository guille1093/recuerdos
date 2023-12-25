<script>
    import CreateForm from "./CreateForm.svelte";
    import MenuDropDown from "./MenuDropDown.svelte";
    import ThemePicker from "./ThemePicker.svelte";
    import UserDropDown from "./UserDropDown.svelte";
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <MenuDropDown />
    </div>
    <div class="navbar-center">
        <a href="/" class="btn btn-ghost text-xl">Momentitos ❤️</a>
    </div>
    <div class="navbar-end">
        <CreateForm />
        <ThemePicker />
        <UserDropDown />
    </div>
</div>
