/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default [
  {
    name: 'Categories',
    slug: 'web_story_category',
    capabilities: {
      manage_terms: 'manage_categories',
      edit_terms: 'manage_categories',
      delete_terms: 'manage_categories',
      assign_terms: 'edit_posts',
    },
    description: 'Story Categories',
    labels: {
      name: 'Categories',
      singularName: 'Category',
      searchItems: 'Search Categories',
      popularItems: null,
      allItems: 'All Categories',
      parentItem: 'Parent Category',
      parentItemColon: 'Parent Category:',
      editItem: 'Edit Category',
      viewItem: 'View Category',
      updateItem: 'Update Category',
      addNewItem: 'Add New Category',
      newItemName: 'New Category Name',
      separateItemsWithCommas: null,
      addOrRemoveItems: null,
      chooseFromMostUsed: null,
      notFound: 'No categories found.',
      noTerms: 'No categories',
      filterByItem: 'Filter by category',
      itemsListNavigation: 'Categories list navigation',
      itemsList: 'Categories list',
      mostUsed: 'Most Used',
      backToItems: '&larr; Go to Categories',
      itemLink: 'Category Link',
      itemLinkDescription: 'A link to a category.',
      menuName: 'Categories',
      nameAdminBar: 'story-category',
    },
    types: ['web-story'],
    showCloud: true,
    hierarchical: true,
    restBase: 'web_story_category',
    visibility: {
      public: true,
      publicly_queryable: true,
      show_admin_column: false,
      show_in_nav_menus: true,
      show_in_quick_edit: true,
      show_ui: true,
    },
    restPath: 'http://localhost:8899/wp-json/wp/v2/story-categories',
  },
  {
    name: 'Tags',
    slug: 'web_story_tag',
    capabilities: {
      manage_terms: 'manage_categories',
      edit_terms: 'manage_categories',
      delete_terms: 'manage_categories',
      assign_terms: 'edit_posts',
    },
    description: 'Story Tags',
    labels: {
      name: 'Tags',
      singularName: 'Tag',
      searchItems: 'Search Tags',
      popularItems: 'Popular Tags',
      allItems: 'All Tags',
      parentItem: null,
      parentItemColon: null,
      editItem: 'Edit Tag',
      viewItem: 'View Tag',
      updateItem: 'Update Tag',
      addNewItem: 'Add New Tag',
      newItemName: 'New Tag Name',
      separateItemsWithCommas: 'Separate tags with commas',
      addOrRemoveItems: 'Add or remove tags',
      chooseFromMostUsed: 'Choose from the most used tags',
      notFound: 'No tags found.',
      noTerms: 'No tags',
      filterByItem: null,
      itemsListNavigation: 'Tags list navigation',
      itemsList: 'Tags list',
      mostUsed: 'Most Used',
      backToItems: '&larr; Go to Tags',
      itemLink: 'Tag Link',
      itemLinkDescription: 'A link to a tag.',
      menuName: 'Tags',
      nameAdminBar: 'web_story_tag',
    },
    types: ['web-story'],
    showCloud: true,
    hierarchical: false,
    restBase: 'web_story_tag',
    visibility: {
      public: true,
      publicly_queryable: true,
      show_admin_column: false,
      show_in_nav_menus: true,
      show_in_quick_edit: true,
      show_ui: true,
    },
    restPath: 'http://localhost:8899/wp-json/web-stories/v1/web_story_tag',
  },
  {
    name: 'Colors',
    slug: 'story_color',
    capabilities: {
      manage_terms: 'manage_categories',
      edit_terms: 'manage_categories',
      delete_terms: 'manage_categories',
      assign_terms: 'edit_posts',
    },
    description: 'Story Colors',
    labels: {
      name: 'Colors',
      singularName: 'Color',
      searchItems: 'Search Colors',
      popularItems: 'Popular Colors',
      allItems: 'All Colors',
      parentItem: null,
      parentItemColon: null,
      editItem: 'Edit Color',
      viewItem: 'View Color',
      updateItem: 'Update Color',
      addNewItem: 'Add New Color',
      newItemName: 'New Color Name',
      separateItemsWithCommas: 'Separate colors with commas',
      addOrRemoveItems: 'Add or remove colors',
      chooseFromMostUsed: 'Choose from the most used colors',
      notFound: 'No colors found.',
      noTerms: 'No colors',
      filterByItem: null,
      itemsListNavigation: 'Colors list navigation',
      itemsList: 'Colors list',
      mostUsed: 'Most Used',
      backToItems: '&larr; Go to Colors',
      itemLink: 'Color Color',
      itemLinkDescription: 'A link to a color.',
      menuName: 'Colors',
      nameAdminBar: 'Color',
      archives: 'All Colors',
    },
    types: ['web-story'],
    showCloud: true,
    hierarchical: false,
    restBase: 'story_colors',
    visibility: {
      public: true,
      publicly_queryable: true,
      show_admin_column: false,
      show_in_nav_menus: true,
      show_in_quick_edit: true,
      show_ui: true,
    },
    restPath: 'http://localhost:8899/wp-json/wp/v2/story-colors',
  },
  {
    name: 'Verticals',
    slug: 'story-vertical',
    capabilities: {
      manage_terms: 'manage_categories',
      edit_terms: 'manage_categories',
      delete_terms: 'manage_categories',
      assign_terms: 'edit_posts',
    },
    description: 'Story Verticals',
    labels: {
      name: 'Verticals',
      singularName: 'Vertical',
      searchItems: 'Search Verticals',
      popularItems: null,
      allItems: 'All Verticals',
      parentItem: 'Parent Vertical',
      parentItemColon: 'Parent Vertical:',
      editItem: 'Edit Vertical',
      viewItem: 'View Vertical',
      updateItem: 'Update Vertical',
      addNewItem: 'Add New Vertical',
      newItemName: 'New Vertical Name',
      separateItemsWithCommas: null,
      addOrRemoveItems: null,
      chooseFromMostUsed: null,
      notFound: 'No verticals found.',
      noTerms: 'No verticals',
      filterByItem: 'Filter by vertical',
      itemsListNavigation: 'Verticals list navigation',
      itemsList: 'Verticals list',
      mostUsed: 'Most Used',
      backToItems: '&larr; Go to Verticals',
      itemLink: 'Color Vertical',
      itemLinkDescription: 'A link to a vertical.',
      menuName: 'Verticals',
      nameAdminBar: 'Vertical',
      archives: 'All Verticals',
    },
    types: ['web-story'],
    showCloud: true,
    hierarchical: true,
    restBase: 'story-verticals',
    visibility: {
      public: true,
      publicly_queryable: true,
      show_admin_column: false,
      show_in_nav_menus: true,
      show_in_quick_edit: true,
      show_ui: true,
    },
    restPath: 'http://localhost:8899/wp-json/web-stories/v1/web_story_category',
  },
];
