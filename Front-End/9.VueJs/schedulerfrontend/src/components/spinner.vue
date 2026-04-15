<template>
    <div>
        <div class="modal" tabindex="-1" role="dialog" style="display: block; background: none;">
            <div class="modal-dialog" role="document">
                <div class="customSpinner">
                    <div class="modal-header">
                        <i id="spinner" class="fas fa-spinner fa-spin"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'SpinnerComponent',
}
</script>

<style scoped>

#spinner {
  font-size: 2.2em;
}

.customSpinner {
  display: flex;
  position: fixed;
  top: 18%;
  left: 54.5%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0);
}

</style>