import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sudoku from '@/components/Sudoku'
import CheatSheet from '@/components/CheatSheet'
import CommandLineCheatSheet from '@/components/CommandLineCheatSheet'
import KeyboardShortcutsCheatSheet from '@/components/KeyboardShortcutsCheatSheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sudoku',
      name: 'Sudoku',
      component: Sudoku
    },
    {
      path: '/cheat-sheet',
      name: 'CheatSheet',
      component: CheatSheet
    },
    {
      path: '/cmd-line',
      name: 'CommandLineCheatSheet',
      component: CommandLineCheatSheet
    },
    {
      path: '/keybindings',
      name: 'KeyboardShortcutsCheatSheet',
      component: KeyboardShortcutsCheatSheet
    }
  ]
})
