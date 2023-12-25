<script lang="ts">
    let createModal: HTMLDialogElement;

    const showPreview = async (event) => {
        const target = event.target;
        const files = target.files;

        if (files.length > 0) {
            const src = URL.createObjectURL(files[0]);
            const preview = document.getElementById("avatar-preview");

            if (preview) {
                const preview = document.getElementById(
                    "avatar-preview",
                ) as HTMLImageElement;
                preview.src = src;
                preview.style.display = "block";
            }
        }
    };
</script>

<button class="btn btn-ghost btn-circle" on:click={createModal.showModal()}
    ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
    </svg>
</button>
<dialog bind:this={createModal} id="my_modal_3" class="modal">
    <div class="modal-box">
        <form method="dialog">
            <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >✕</button
            >
        </form>

        <img id="avatar-preview" class="hidden" alt="avatar" />

        <form action="/api/images" method="post" enctype="multipart/form-data">
            <input type="file" name="img" on:change={showPreview} />
            <button class="btn" type="submit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    >
                    </path>
                </svg>
                <span>Crear recuerdo</span>
            </button>
        </form>
    </div>
</dialog>
