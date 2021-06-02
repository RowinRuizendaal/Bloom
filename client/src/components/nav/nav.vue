<template>
  <nav class="navigation">
    <ul class="items">
      <li class="link" :class="{ 'fill-active': active === 'home' }">
        <router-link to="/themes">
          <div class="list">
            <svg
              data-name="Iconly/Bulk/Document"
              xmlns="http://www.w3.org/2000/svg"
              width="22.5"
              height="25"
            >
              <g>
                <path
                  d="M16.489 0H6.012C2.213 0 0 2.225 0 6.037V18.95C0 22.825 2.213 25 6.012 25h10.477c3.861 0 6.011-2.175 6.011-6.05V6.037C22.5 2.225 20.35 0 16.489 0"
                  opacity=".4"
                />
                <path
                  data-name="Combined Shape"
                  d="M5.412 18.688a1 1 0 010-1.05.982.982 0 01.938-.462h9.8a.987.987 0 010 1.962h-9.8a.915.915 0 01-.122.008.979.979 0 01-.816-.458zm.938-5.262a.976.976 0 010-1.952h9.8a.976.976 0 010 1.952zm0-5.651a.975.975 0 110-1.95v-.012h3.737a.981.981 0 010 1.962z"
                />
              </g>
            </svg>
            <span>Thema’s</span>
          </div>
        </router-link>
      </li>
      <li class="link" :class="{ 'fill-active': active === 'buddies' }">
        <router-link to="/buddies">
          <div class="list">
            <svg
              data-name="Iconly/Bulk/3 User"
              xmlns="http://www.w3.org/2000/svg"
              width="30.25"
              height="21"
            >
              <g data-name="3 User">
                <path
                  data-name="Fill 1"
                  d="M15.055 13.492c-4.746 0-8.746.775-8.746 3.767S10.337 21 15.055 21c4.744 0 8.746-.775 8.746-3.767s-4.028-3.741-8.746-3.741"
                />
                <path
                  data-name="Fill 3"
                  d="M15.055 11.642a5.785 5.785 0 005.788-5.821 5.788 5.788 0 10-11.576 0 5.785 5.785 0 005.788 5.821"
                  opacity=".4"
                />
                <path
                  data-name="Fill 6"
                  d="M27.621 7.172a4.915 4.915 0 00-4.71-6.2 4.932 4.932 0 00-.973.1.187.187 0 00-.114.068.142.142 0 00.024.151 7.985 7.985 0 011.463 4.635 7.923 7.923 0 01-1.349 4.457.218.218 0 00.149.335 4.513 4.513 0 00.665.064 4.83 4.83 0 004.845-3.61"
                  opacity=".4"
                />
                <path
                  data-name="Fill 8"
                  d="M29.988 13.873a3.788 3.788 0 00-2.935-1.793 21.389 21.389 0 00-4.455-.393.051.051 0 00-.045.038.063.063 0 00.04.062c.834.418 4.06 2.222 3.651 6.028a.249.249 0 00.278.282c.793-.11 2.831-.555 3.466-1.928a2.643 2.643 0 000-2.3"
                />
                <path
                  data-name="Fill 11"
                  d="M8.312 1.072a4.832 4.832 0 00-.975-.1 4.913 4.913 0 00-4.707 6.2 4.828 4.828 0 004.846 3.611 4.67 4.67 0 00.665-.064.218.218 0 00.147-.336 8.032 8.032 0 01.115-9.092.142.142 0 00.022-.151.178.178 0 00-.113-.068"
                  opacity=".4"
                />
                <path
                  data-name="Fill 13"
                  d="M3.192 12.08a3.786 3.786 0 00-2.929 1.793 2.638 2.638 0 000 2.3c.637 1.369 2.673 1.815 3.466 1.924a.248.248 0 00.277-.282c-.406-3.804 2.817-5.609 3.652-6.027a.065.065 0 00.042-.063.046.046 0 00-.047-.037 21.336 21.336 0 00-4.461.392"
                />
              </g>
            </svg>
            <span>Buddy</span>
          </div>
        </router-link>
      </li>
      <li class="link" :class="{ 'fill-active': active === 'messages' }">
        <router-link to="/messages">
          <div class="list">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24.962">
              <path
                data-name="Fill 1"
                d="M12.525 0A12.5 12.5 0 000 12.5a13.2 13.2 0 001.688 6.237 1.307 1.307 0 01.087 1.125l-.837 2.8a.78.78 0 001.025.975l2.525-.75a2.13 2.13 0 011.864.45A12.483 12.483 0 1012.525 0"
                opacity=".4"
              />
              <path
                data-name="Combined Shape"
                d="M16.639 12.512a1.6 1.6 0 111.6 1.6 1.595 1.595 0 01-1.6-1.6zm-5.763-.012a1.6 1.6 0 111.6 1.612 1.615 1.615 0 01-1.6-1.612zm-5.763.012a1.6 1.6 0 013.2 0 1.612 1.612 0 01-1.6 1.6 1.611 1.611 0 01-1.6-1.6z"
              />
            </svg>
            <span>Berichten</span>
          </div>
        </router-link>
      </li>
      <li class="link" :class="{ 'fill-active': active === 'profile' }">
        <router-link to="/profile">
          <div class="list">
            <svg
              data-name="Iconly/Bulk/Profile"
              xmlns="http://www.w3.org/2000/svg"
              width="17.493"
              height="21"
            >
              <path
                data-name="Fill 1"
                d="M8.746 13.492C4 13.492 0 14.267 0 17.259S4.028 21 8.746 21c4.744 0 8.746-.775 8.746-3.767s-4.028-3.741-8.746-3.741"
              />
              <path
                data-name="Fill 3"
                d="M8.747 11.642a5.785 5.785 0 005.788-5.821 5.788 5.788 0 10-11.576 0 5.785 5.785 0 005.788 5.821"
                opacity=".4"
              />
            </svg>
            <span>Profiel</span>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: "home",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "nav.scss";
</style>
