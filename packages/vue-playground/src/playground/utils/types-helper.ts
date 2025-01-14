/* eslint-disable @typescript-eslint/no-explicit-any */
import type {CSSProperties, Ref} from 'vue'
import type {File, ReplStore} from '../../core'
import type {PlaygroundProps} from '../playground.type'

export type {editor as MonacoEditor} from 'monaco-editor'

export type Monaco = typeof monaco

export type CreateEditorOptions = monaco.editor.IStandaloneEditorConstructionOptions

export type IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor

export type MaybePromise<T> = T | Promise<T>

export type PromiseFnReturnType<Fn extends (...args: any[]) => Promise<any>, R = ReturnType<Fn>> = R extends Promise<
  infer U
>
  ? U
  : never

export type Tsconfig = Parameters<typeof monaco.languages.typescript.typescriptDefaults.setCompilerOptions>[0]

export type LayoutDirection =
  | 'EditorBottomPreviewTop'
  | 'EditorTopPreviewBottom'
  | 'EditorRightPreviewLeft'
  | 'EditorLeftPreviewRight'

export interface TsLib {
  content: string
  filePath?: string
}

export interface PlaygroundPkgCdn {
  '@vue/runtime-dom'?: (version: string, ending: string) => string
  '@vue/compiler-sfc'?: (version: string, ending: string) => string
  'es-module-shims'?: (version: string, ending: string) => string
}

export type PlaygroundOptions = Partial<PlaygroundProps>

export interface PlaygroundLifeCycle {
  beforeLoadMonaco?: () => MaybePromise<void>
  afterLoadMonaco?: (monaco: Monaco) => MaybePromise<void>
  loadTsconfig?: (monaco: Monaco, defaultTsconfig: Tsconfig) => MaybePromise<Tsconfig>
  loadTsLibs?: (monaco: Monaco, defaultTsLibs: TsLib[]) => MaybePromise<TsLib[]>
  afterSetLanguage?: (monaco: Monaco) => MaybePromise<void>
  loadWorkers?: (monaco: Monaco, self: Window) => MaybePromise<void>
  beforeCreateEditor?: (monaco: Monaco) => MaybePromise<void>
  loadEditorOption?: (monaco: Monaco, defaultOptions: CreateEditorOptions) => MaybePromise<CreateEditorOptions>
  afterCreateEditor?: (monaco: Monaco, editor: IStandaloneCodeEditor) => MaybePromise<void>
  onCodeChange?: (event: {activeFile: File; newCode: string}) => MaybePromise<void>
  beforeDestroyEditor?: (monaco: Monaco, editor: IStandaloneCodeEditor) => MaybePromise<void>
  afterDestroyEditor?: (monaco: Monaco) => MaybePromise<void>
  onDarkModeChange?: (darkMode: boolean) => MaybePromise<void>
}

export interface EditorExpose {
  getEditor: () => IStandaloneCodeEditor
  disposeEditor: Ref<() => void>
  loading: Ref<boolean>
}

export interface PreviewExpose {
  containerRef: Ref<HTMLElement | undefined>
  sandboxIframe: HTMLIFrameElement | undefined
  loading: Ref<boolean>
}

export interface PlaygroundExpose {
  store: ReplStore
  preview: Ref<PreviewExpose>
  editor: Ref<EditorExpose>
  isDark: Ref<boolean>
  toggleDark: (preIsDark?: boolean | undefined) => void
}

export interface PlaygroundTheme extends CSSProperties {
  '--editor-theme-name'?: string
  '--theme-color'?: string
  '--border-color'?: string
  '--bg-color'?: string
  '--toolbar-title-color'?: string
  '--toolbar-bg-color'?: string
  '--toolbar-text-color'?: string
  '--toolbar-icon-bg-color'?: string
  '--toolbar-icon-color'?: string
  '--toolbar-icon-active-color'?: string
  '--preview-bg-color'?: string
  '--preview-text-color'?: string
  '--file-manager-bg-color'?: string
  '--file-manager-text-color'?: string
  '--file-manager-active-bg-color'?: string
  '--file-manager-active-text-color'?: string
  '--file-manager-right-float-bg'?: string
  '--message-warn-text-color'?: string
  '--message-warn-bg-color'?: string
  '--message-warn-border-color'?: string
  '--message-error-text-color'?: string
  '--message-error-bg-color'?: string
  '--message-error-border-color'?: string
  '--message-dismiss-text-color'?: string
  '--message-dismiss-bg-color'?: string
}

export interface PlaygroundThemes {
  light?: PlaygroundTheme
  dark?: PlaygroundTheme
}
