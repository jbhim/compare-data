declare namespace Vue {
    import { DefineComponent } from '@vue/runtime-core'
    export function createApp (option: unknown): any;
    export function defineComponent (option: unknown): DefineComponent;
    export function onMounted (f: unknown): any;
    export function ref (f?: unknown): any;
}
