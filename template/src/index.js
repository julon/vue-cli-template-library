import HelloWorld from "@/components/HelloWorld";

const LibraryModule = {
  HelloWorld,

  install(Vue) {
    // Register components with vue
    Vue.component("hello-world", HelloWorld);
  }
};

// Export library
export default LibraryModule;

// Export components
export { HelloWorld };
