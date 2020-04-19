<template>
  <v-toolbar
    dark
    :src="image"
  >
    <MenuItems />
  </v-toolbar>
</template>
<script>
import MenuItems from '@/components/Menu/menuItems'
import { createClient } from '~/plugins/contentful.js'
export default {
  components: {
    MenuItems
  },
  data () {
    return {
      image: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    const client = createClient()
    return client.getAsset(process.env.CTF_ASSET_ID)
      .then((asset) => {
        this.image = asset.fields.file.url
      })
  }
}
</script>
