<template>
  <div
    class="group absolute w-full overflow-visible h-16"
  >
    <GNavbar
      class="transition-transform duration-300 ease-out -translate-y-full group-hover:translate-0"
    >
      <template #left>
        <GNavBrand
          :as="RouterLink"
          class="cursor-pointer"
          to="/"
        >
          <h1 class="text-lg">Starfall Meadow</h1>
        </GNavBrand>
      </template>
      <template #right>
        <GNavLink
          :as="RouterLink"
          to="/posts"
          label="Posts"
          :icon="GIconName.Newspaper"
          class="text-sm my-1"
        />
      </template>
    </GNavBar>
  </div>
</template>

<script setup lang="ts">
import { GIconName, GNavbar, GNavBrand, GNavLink, GTheme, useTheme } from '@hdnax/genuix';
import { RouterLink } from 'vue-router';

// Always use dark theme for design system
const theme = useTheme();
theme.setTheme(GTheme.Dark);
</script>
