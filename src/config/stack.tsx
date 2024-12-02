"use client";
const stack = [
  {
    id: 1,
    name: "nextjs",
    icon: () => (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="nextjs2">
          <g id="nextjs2_2">
            <path
              id="Vector"
              d="M50 99.9996C77.6142 99.9996 100 77.6139 100 49.9996C100 22.3854 77.6142 -0.000366211 50 -0.000366211C22.3858 -0.000366211 0 22.3854 0 49.9996C0 77.6139 22.3858 99.9996 50 99.9996Z"
              fill="white"
            />
            <path
              id="Vector_2"
              d="M83.06 87.511L38.4122 29.9996H30V69.983H36.7298V38.546L77.7773 91.5803C79.6294 90.3405 81.394 88.9804 83.06 87.511Z"
              fill="url(#paint0_linear_790_6564)"
            />
            <path
              id="Vector_3"
              d="M70.5558 29.9996H63.8892V69.9996H70.5558V29.9996Z"
              fill="url(#paint1_linear_790_6564)"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_790_6564"
            x1="60.5555"
            y1="64.7219"
            x2="80.2778"
            y2="89.1663"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_790_6564"
            x1="67.2225"
            y1="29.9996"
            x2="67.1109"
            y2="59.3748"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    name: "react",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4" />
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    name: "TS",
    icon: () => (
      <svg
        width="100"
        height="100"
        viewBox="0 0 90 90"
        fill="#017ACB"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="typescript">
          <g id="typescript_2">
            <path
              id="Vector"
              d="M0 0.000488281H100V100H0V0.000488281Z"
              fill="#017ACB"
            />
            <path
              id="Vector_2"
              d="M48.0157 37.0317H52.8126V45.313H39.8438V82.1567L39.5 82.2505C39.0313 82.3755 32.8594 82.3755 31.5313 82.2349L30.4688 82.1411V45.313H17.5V37.0317L21.6094 36.9849C23.8594 36.9536 29.6406 36.9536 34.4532 36.9849C39.2657 37.0161 45.3594 37.0317 48.0157 37.0317ZM84.6251 78.2505C82.7189 80.2661 80.672 81.3911 77.2657 82.313C75.7813 82.7192 75.5313 82.7349 72.1876 82.7192C68.8438 82.7036 68.5782 82.7036 66.9532 82.2817C62.7501 81.2036 59.3594 79.0942 57.0469 76.1099C56.3907 75.2661 55.3126 73.5161 55.3126 73.2974C55.3126 73.2349 55.4688 73.0942 55.6719 73.0005C55.8751 72.9067 56.2969 72.6411 56.6407 72.438C56.9844 72.2349 57.6094 71.8599 58.0313 71.6411C58.4532 71.4224 59.6719 70.7036 60.7345 70.063C61.797 69.4224 62.7657 68.9067 62.8751 68.9067C62.9845 68.9067 63.1876 69.1255 63.3438 69.3911C64.2813 70.9692 66.4688 72.9849 68.0157 73.6724C68.9688 74.0786 71.0782 74.5317 72.0938 74.5317C73.0313 74.5317 74.7501 74.1255 75.672 73.7036C76.6563 73.2505 77.1564 72.7974 77.7501 71.8911C78.1564 71.2505 78.2032 71.0786 78.1876 69.8599C78.1876 68.7349 78.1251 68.4224 77.8126 67.9067C76.9376 66.4692 75.7501 65.7192 70.9376 63.5942C65.9688 61.3911 63.7345 60.0786 61.9219 58.313C60.5782 57.0005 60.3126 56.6411 59.4688 55.0005C58.3751 52.8911 58.2344 52.2036 58.2188 49.063C58.2032 46.8599 58.2501 46.1411 58.4844 45.3911C58.8126 44.2661 59.8751 42.0942 60.3594 41.5474C61.3594 40.3755 61.7188 40.0161 62.422 39.438C64.547 37.688 67.8595 36.5317 71.0313 36.4224C71.3907 36.4224 72.5782 36.4849 73.6876 36.563C76.8751 36.8286 79.047 37.6099 81.1407 39.2817C82.7189 40.5317 85.1095 43.4692 84.8751 43.8599C84.7189 44.0942 78.4845 48.2505 78.0782 48.3755C77.8282 48.4536 77.6564 48.3599 77.3126 47.9536C75.1876 45.4067 74.3282 44.8599 72.2657 44.7349C70.797 44.6411 70.0157 44.813 69.0313 45.4692C68.0001 46.1567 67.5001 47.2036 67.5001 48.6567C67.5157 50.7817 68.3282 51.7817 71.3282 53.2661C73.2657 54.2192 74.922 55.0005 75.047 55.0005C75.2345 55.0005 79.2501 57.0005 80.297 57.6255C85.172 60.4849 87.1564 63.4224 87.672 68.4849C88.047 72.2974 86.9689 75.7817 84.6251 78.2505Z"
              fill="white"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    name: "tailwind",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
          fill="#38bdf8"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "docker",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#3A4D54"
          d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"
        />
        <path
          fill="#00AADA"
          d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"
        />
        <path
          fill="#28B8EB"
          d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"
        />
        <path
          fill="#028BB8"
          d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"
        />
        <path
          fill="#019BC6"
          d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#00ACD3"
          d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#23C2EE"
          d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#00ACD3"
          d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#23C2EE"
          d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#00ACD3"
          d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#23C2EE"
          d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#00ACD3"
          d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#D4EEF1"
          d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#3A4D54"
          d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"
        />
        <path
          fill="#BFDBE0"
          d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"
        />
        <path
          fill="#D4EEF1"
          d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Github",
    icon: () => (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="github">
          <g id="github_2">
            <path
              id="Vector"
              d="M50 1.00049C22.3892 1.00049 -0.000244141 23.386 -0.000244141 51.0007C-0.000244141 73.0924 14.3263 91.8345 34.1931 98.4461C36.6918 98.9088 37.6094 97.3614 37.6094 96.0406C37.6094 94.8485 37.5627 90.9095 37.5416 86.7316C23.6311 89.7562 20.6959 80.8322 20.6959 80.8322C18.4215 75.0528 15.1443 73.5163 15.1443 73.5163C10.608 70.4129 15.4863 70.4765 15.4863 70.4765C20.5073 70.8294 23.1511 75.6292 23.1511 75.6292C27.6105 83.2733 34.8479 81.0631 37.7012 79.7859C38.1498 76.5539 39.4458 74.3485 40.8756 73.0999C29.7701 71.8352 18.0952 67.5479 18.0952 48.3894C18.0952 42.9308 20.0485 38.4701 23.2472 34.9687C22.728 33.7091 21.0167 28.6238 23.7315 21.7366C23.7315 21.7366 27.9301 20.3927 37.4851 26.8619C41.4732 25.7537 45.7507 25.1985 50 25.1796C54.2492 25.1985 58.5298 25.7537 62.5258 26.8619C72.0694 20.3927 76.2622 21.7366 76.2622 21.7366C78.9836 28.6238 77.2715 33.7091 76.7523 34.9687C79.9581 38.4701 81.898 42.9304 81.898 48.3894C81.898 67.5934 70.2012 71.8223 59.0675 73.0599C60.8607 74.6116 62.4587 77.6546 62.4587 82.3192C62.4587 89.0091 62.4007 94.3936 62.4007 96.0406C62.4007 97.3712 63.3007 98.9304 65.8355 98.4394C85.6912 91.8204 99.9998 73.085 99.9998 51.0007C99.9998 23.386 77.6135 1.00049 50 1.00049Z"
              fill="white"
            />
            <path
              id="Vector_2"
              d="M18.7264 72.227C18.6166 72.4752 18.2252 72.5498 17.8696 72.3796C17.5068 72.2164 17.3029 71.8776 17.4206 71.6282C17.5284 71.3725 17.9198 71.3012 18.2817 71.4729C18.6452 71.6357 18.8523 71.9776 18.7264 72.227ZM21.1859 74.4215C20.9475 74.6426 20.4812 74.5399 20.1648 74.1905C19.8377 73.8419 19.7766 73.376 20.0185 73.1513C20.2644 72.9305 20.7165 73.0337 21.0444 73.3827C21.3714 73.7352 21.4349 74.1983 21.1855 74.4218L21.1859 74.4215ZM22.8733 77.2292C22.5667 77.4421 22.0655 77.2425 21.7561 76.7978C21.4498 76.3535 21.4498 75.8202 21.7628 75.6065C22.0733 75.3928 22.5667 75.5849 22.8804 76.0261C23.1862 76.4782 23.1862 77.0116 22.8729 77.2296L22.8733 77.2292ZM25.7266 80.4812C25.4524 80.7832 24.8689 80.7024 24.4415 80.2899C24.0047 79.8868 23.8827 79.3146 24.1576 79.0123C24.4348 78.7095 25.0219 78.7946 25.4524 79.2036C25.8865 79.606 26.0191 80.1824 25.7269 80.4812H25.7266ZM29.4143 81.5792C29.2939 81.9706 28.7316 82.1486 28.1653 81.9824C27.5998 81.811 27.2296 81.3522 27.3438 80.9565C27.4614 80.5624 28.0261 80.3769 28.5967 80.555C29.1613 80.7255 29.5323 81.1808 29.4147 81.5792H29.4143ZM33.6118 82.0447C33.6259 82.4573 33.1455 82.7992 32.551 82.8067C31.953 82.8196 31.4695 82.4859 31.4632 82.0804C31.4632 81.6639 31.9326 81.3251 32.5302 81.3153C33.1247 81.3036 33.6118 81.6349 33.6118 82.0447ZM37.7348 81.8867C37.8061 82.289 37.3928 82.7023 36.8027 82.8121C36.2223 82.918 35.685 82.6698 35.6109 82.271C35.5388 81.8584 35.9599 81.4455 36.5391 81.3385C37.1305 81.2357 37.6595 81.4777 37.7348 81.8867Z"
              fill="white"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 7,
    name: "ReactQuery",
    icon: () => (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="reactquery">
          <g id="reactquery_2">
            <path
              id="Vector"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M61.7109 60.6586L59.7928 63.9894C59.2149 64.9928 58.1452 65.6111 56.9874 65.6111H42.2932C41.1353 65.6111 40.0656 64.9928 39.4877 63.9894L37.5694 60.6586H61.7109ZM67.0809 51.3343L63.6987 57.207H35.5816L32.1996 51.3343H67.0809ZM63.823 42.2163L67.0863 47.8829H32.1942L35.4575 42.2163H63.823ZM56.9874 33.5967C58.1452 33.5967 59.2149 34.2151 59.7928 35.2185L61.8352 38.7647H37.4453L39.4877 35.2185C40.0656 34.2151 41.1353 33.5967 42.2932 33.5967H56.9874Z"
              fill="#00435B"
            />
            <path
              id="Vector_2"
              d="M20.9074 32.0512C19.2796 24.1582 18.9303 18.1044 19.9824 13.7085C20.6082 11.0941 21.7523 8.96123 23.4919 7.42244C25.3285 5.79787 27.6505 5.00069 30.2596 5.00069C34.5638 5.00069 39.0886 6.96346 43.9241 10.6922C45.8964 12.2131 47.9434 14.0463 50.0693 16.1928C50.2385 15.9749 50.4298 15.7695 50.6429 15.5796C56.6531 10.2236 61.7133 6.89581 66.0413 5.61273C68.6147 4.84981 71.0308 4.77713 73.231 5.51757C75.5535 6.29915 77.404 7.91479 78.7096 10.1778C80.8644 13.9126 81.4326 18.8201 80.6293 24.8796C80.3018 27.3495 79.742 30.04 78.9511 32.9551C79.2495 32.9912 79.5486 33.0573 79.8448 33.1555C87.4705 35.6825 92.8703 38.4001 96.1395 41.5057C98.0846 43.3535 99.3547 45.4107 99.8139 47.6878C100.299 50.0913 99.826 52.5021 98.5219 54.7634C96.3712 58.4928 92.4167 61.4341 86.7829 63.7639C84.5208 64.6993 81.9614 65.5465 79.1017 66.3085C79.2322 66.6031 79.3334 66.916 79.4011 67.2442C81.0289 75.1372 81.3782 81.191 80.326 85.5869C79.7003 88.2014 78.5562 90.3342 76.8166 91.873C74.98 93.4975 72.6579 94.2947 70.0489 94.2947C65.7447 94.2947 61.2199 92.332 56.3844 88.6032C54.3911 87.0662 52.3215 85.2101 50.1713 83.034C49.95 83.3801 49.6784 83.7018 49.3571 83.988C43.3469 89.344 38.2867 92.6718 33.9587 93.9549C31.3853 94.7178 28.9692 94.7905 26.769 94.05C24.4465 93.2685 22.596 91.6528 21.2904 89.3898C19.1356 85.655 18.5674 80.7475 19.3707 74.688C19.71 72.1288 20.2987 69.3328 21.1356 66.2955C20.8085 66.2623 20.48 66.1932 20.1552 66.0855C12.5295 63.5585 7.12969 60.8409 3.86052 57.7352C1.91544 55.8875 0.645278 53.8303 0.186124 51.5532C-0.298514 49.1497 0.174045 46.7389 1.47813 44.4775C3.62884 40.7482 7.58335 37.8069 13.2171 35.4771C15.5466 34.5138 18.1914 33.644 21.1547 32.8646C21.0491 32.6061 20.9658 32.3344 20.9074 32.0512Z"
              fill="#002B3B"
            />
            <path
              id="Vector_3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.4917 29.5367C44.4446 29.2221 48.519 29.0832 52.7148 29.1199C53.5094 29.1269 54.1592 28.4883 54.1662 27.6937C54.1691 27.359 54.0553 27.0338 53.8443 26.774C44.2944 15.0156 36.4307 9.13635 30.2534 9.13635C23.876 9.13635 22.0566 16.1662 24.7953 30.226C24.9454 30.9966 25.6856 31.5046 26.4587 31.3676C31.3344 30.5035 36.0121 29.8932 40.4917 29.5367Z"
              fill="#FF4154"
            />
            <path
              id="Vector_4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M62.6818 31.472C64.9646 34.7616 67.1556 38.2451 69.2547 41.9228C69.6487 42.613 70.5275 42.8531 71.2176 42.4592C71.507 42.294 71.7301 42.0335 71.8488 41.7222C77.2509 27.5528 78.3862 17.781 75.2548 12.4068C72.0234 6.86104 64.9825 8.77863 54.1322 18.1596C53.5356 18.6754 53.4654 19.5753 53.9747 20.1773C57.1985 23.9881 60.1009 27.753 62.6818 31.472Z"
              fill="#FF4154"
            />
            <path
              id="Vector_5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M72.2631 51.2672C70.5546 54.8581 68.6342 58.467 66.5019 62.094C66.0992 62.7791 66.3281 63.6609 67.0131 64.0636C67.3031 64.2341 67.6438 64.2976 67.9757 64.243C82.8629 61.7953 91.8526 57.8885 94.9449 52.5227C98.1386 46.9809 93.0027 41.9015 79.5372 37.2846C78.7954 37.0303 77.9866 37.4168 77.7184 38.1537C76.0193 42.8236 74.2008 47.1948 72.2631 51.2672Z"
              fill="#FF4154"
            />
            <path
              id="Vector_6"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.0479 69.8511C56.0949 70.1657 52.0206 70.3047 47.8248 70.2679C47.0301 70.2609 46.3803 70.8995 46.3734 71.6941C46.3704 72.0288 46.4843 72.354 46.6953 72.6138C56.2452 84.3722 64.1088 90.2515 70.2861 90.2515C76.6636 90.2515 78.4829 83.2216 75.7443 69.1619C75.5941 68.3912 74.854 67.8832 74.0809 68.0202C69.2051 68.8843 64.5274 69.4946 60.0479 69.8511Z"
              fill="#FF4154"
            />
            <path
              id="Vector_7"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.3182 68.0956C35.0354 64.8061 32.8444 61.3225 30.7453 57.6448C30.3514 56.9546 29.4726 56.7145 28.7824 57.1084C28.493 57.2736 28.2699 57.5341 28.1512 57.8455C22.7491 72.0148 21.6138 81.7866 24.7453 87.1608C27.9767 92.7066 35.0175 90.789 45.8678 81.408C46.4644 80.8923 46.5346 79.9924 46.0253 79.3903C42.8015 75.5795 39.8991 71.8146 37.3182 68.0956Z"
              fill="#FF4154"
            />
            <path
              id="Vector_8"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.7369 47.7608C29.4455 44.17 31.3659 40.5611 33.4981 36.934C33.9008 36.249 33.672 35.3672 32.9869 34.9645C32.6969 34.794 32.3563 34.7305 32.0243 34.7851C17.1371 37.2328 8.14742 41.1396 5.05511 46.5054C1.8614 52.0472 6.9973 57.1265 20.4628 61.7434C21.2046 61.9978 22.0135 61.6113 22.2816 60.8743C23.9808 56.2044 25.7992 51.8332 27.7369 47.7608Z"
              fill="#FF4154"
            />
            <path
              id="Vector_9"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.4745 33.7766H55.8088C57.6126 33.7766 59.2787 34.7414 60.1766 36.3059L66.3698 47.0973C67.2607 48.6496 67.2607 50.5583 66.3698 52.1106L60.1766 62.902C59.2787 64.4665 57.6126 65.4313 55.8088 65.4313H43.4745C41.6706 65.4313 40.0045 64.4665 39.1067 62.902L32.9135 52.1106C32.0225 50.5583 32.0225 48.6496 32.9135 47.0973L39.1067 36.3059C40.0045 34.7414 41.6706 33.7766 43.4745 33.7766ZM53.9289 37.0337C55.7337 37.0337 57.4005 37.9995 58.298 39.5653L62.6167 47.0996C63.5059 48.6508 63.5059 50.5571 62.6167 52.1083L58.298 59.6426C57.4005 61.2084 55.7337 62.1742 53.9289 62.1742H45.3543C43.5495 62.1742 41.8827 61.2084 40.9852 59.6426L36.6666 52.1083C35.7774 50.5571 35.7774 48.6508 36.6666 47.0996L40.9852 39.5653C41.8827 37.9995 43.5495 37.0337 45.3543 37.0337H53.9289ZM51.9027 40.5961H47.3805C45.5776 40.5961 43.9122 41.5599 43.014 43.1232L40.7319 47.0951C39.8393 48.6486 39.8393 50.5593 40.7319 52.1128L43.014 56.0847C43.9122 57.648 45.5776 58.6118 47.3805 58.6118H51.9027C53.7057 58.6118 55.3711 57.648 56.2693 56.0847L58.5514 52.1128C59.444 50.5593 59.444 48.6486 58.5514 47.0951L56.2693 43.1232C55.3711 41.5599 53.7057 40.5961 51.9027 40.5961ZM49.9517 44.0059C51.7533 44.0059 53.4176 44.9683 54.3164 46.5297L54.6399 47.0918C55.535 48.647 55.535 50.5609 54.6399 52.1161L54.3164 52.6782C53.4176 54.2396 51.7533 55.202 49.9517 55.202H49.3316C47.53 55.202 45.8656 54.2396 44.9669 52.6782L44.6434 52.1161C43.7483 50.5609 43.7483 48.647 44.6434 47.0918L44.9669 46.5297C45.8656 44.9683 47.53 44.0059 49.3316 44.0059H49.9517ZM49.6424 47.3647C48.8406 47.3647 48.1011 47.7915 47.7008 48.4843C47.3005 49.1771 47.3005 50.0308 47.7008 50.7236C48.1011 51.4164 48.8406 51.8432 49.6408 51.8432C50.4427 51.8432 51.1821 51.4164 51.5825 50.7236C51.9828 50.0308 51.9828 49.1771 51.5825 48.4843C51.1821 47.7915 50.4427 47.3647 49.6424 47.3647ZM31.4749 49.604H35.5064H31.4749Z"
              fill="#FFD94C"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 8,
    name: "PSql",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985" />
        <path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419-.038-.935-.064-1.898-.093-2.919-.021-.747-.047-1.684-.085-2.664a18.8 18.8 0 01-4.962 1.568c-3.079.526-6.389.356-9.84-.507-2.435-.609-4.965-1.871-6.407-3.82-4.203 3.681-8.212 3.182-10.396 2.453-3.853-1.285-7.301-4.896-10.542-11.037-2.309-4.375-4.542-10.075-6.638-16.943-3.65-11.96-5.969-24.557-6.175-28.693C4.292 23.698 7.777 14.44 15.296 9.129 27.157.751 45.128 5.678 51.68 7.915c4.402-2.653 9.581-3.944 15.433-3.851 3.143.051 6.136.327 8.916.823 2.9-.912 8.628-2.221 15.185-2.139 12.081.144 22.092 4.852 28.949 13.615 4.894 6.252 2.474 19.381.597 26.651-2.642 10.226-7.271 21.102-12.957 30.57 1.544.011 3.781-.174 6.961-.831 6.274-1.295 8.109 2.069 8.607 3.575 1.995 6.042-6.677 10.608-9.382 11.864-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013-1.216-.107-.12 1.014-.116.991c-.311 11.999-2.025 19.598-5.552 24.619-3.697 5.264-8.835 6.739-13.361 7.709-1.544.33-2.947.474-4.219.474zm-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434.028.99.054 1.927.089 2.802.106 2.65.355 8.855 1.327 11.477.137.371.26.747.39 1.146 1.083 3.316 1.626 4.979 6.309 3.978 3.931-.843 5.952-1.599 7.534-3.851 2.299-3.274 3.585-9.86 3.821-19.575l4.783.116-4.75-.57.14-1.186c.455-3.91.783-6.734 3.396-8.602 2.097-1.498 4.486-1.353 6.389-1.01-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965 1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304 2.906-11.251 2.02-17.226 1.134-18.356-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194-1.8.335-.922-.191c-2.542-.528-5.366-.82-8.393-.869-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721-4.656 3.298-6.777 9.76-6.305 19.207.156 3.119 2.275 14.926 5.771 26.377 4.831 15.825 9.221 21.082 11.054 21.693.32.108 1.15-.537 1.976-1.529a270.708 270.708 0 0110.694-12.07l2.77-2.915 3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238-1.51 1.688-.174.196 4.388 2.025 1.836-2.301z" />
        <path
          fill="#336791"
          d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"
        />
        <path
          fill="#fff"
          d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185-1.562-3.907-1.899-19.069-1.551-31.503a1.59 1.59 0 011.64-1.55 1.594 1.594 0 011.55 1.639c-.401 14.341.168 27.337 1.324 30.229 1.804 4.509 4.54 8.453 12.275 6.796 7.343-1.575 10.093-4.359 11.318-11.46.94-5.449 2.799-20.951 3.028-24.01a1.593 1.593 0 011.71-1.472 1.597 1.597 0 011.472 1.71c-.239 3.185-2.089 18.657-3.065 24.315-1.446 8.387-5.185 12.191-13.794 14.037-1.463.313-2.792.453-4 .454zM31.321 90.466a6.71 6.71 0 01-2.116-.35c-5.347-1.784-10.44-10.492-15.138-25.885-3.576-11.717-5.842-23.947-6.041-27.922-.589-11.784 2.445-20.121 9.02-24.778 13.007-9.216 34.888-.44 35.813-.062a1.596 1.596 0 01-1.207 2.955c-.211-.086-21.193-8.492-32.768-.285-5.622 3.986-8.203 11.392-7.672 22.011.167 3.349 2.284 15.285 5.906 27.149 4.194 13.742 8.967 22.413 13.096 23.79.648.216 2.62.873 5.439-2.517A245.272 245.272 0 0145.88 73.046a1.596 1.596 0 012.304 2.208c-.048.05-4.847 5.067-10.077 11.359-2.477 2.979-4.851 3.853-6.786 3.853zm69.429-13.445a1.596 1.596 0 01-1.322-2.487c14.863-22.055 20.08-48.704 15.612-54.414-5.624-7.186-13.565-10.939-23.604-11.156-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849a1.6 1.6 0 01.631-2.025c.046-.027.192-.089.429-.176l-.021.006.021-.007c1.641-.601 7.639-2.4 15.068-2.315 11.108.118 20.284 4.401 26.534 12.388 2.957 3.779 2.964 12.485.019 23.887-3.002 11.625-8.651 24.118-15.497 34.277-.306.457-.81.703-1.323.703zm.76 10.21c-2.538 0-4.813-.358-6.175-1.174-1.4-.839-1.667-1.979-1.702-2.584-.382-6.71 3.32-7.878 5.208-8.411-.263-.398-.637-.866-1.024-1.349-1.101-1.376-2.609-3.26-3.771-6.078-.182-.44-.752-1.463-1.412-2.648-3.579-6.418-11.026-19.773-6.242-26.612 2.214-3.165 6.623-4.411 13.119-3.716C97.6 28.837 88.5 10.625 66.907 10.271c-6.494-.108-11.82 1.889-15.822 5.93-8.96 9.049-8.636 25.422-8.631 25.586a1.595 1.595 0 11-3.19.084c-.02-.727-.354-17.909 9.554-27.916C53.455 9.272 59.559 6.96 66.96 7.081c13.814.227 22.706 7.25 27.732 13.101 5.479 6.377 8.165 13.411 8.386 15.759.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104-3.639 5.201 3.406 17.834 6.414 23.229.768 1.376 1.322 2.371 1.576 2.985.988 2.396 2.277 4.006 3.312 5.3.911 1.138 1.7 2.125 1.982 3.283.131.23 1.99 2.98 13.021.703 2.765-.57 4.423-.083 4.93 1.45.997 3.015-4.597 6.532-7.694 7.97-2.775 1.29-7.204 2.106-11.036 2.106zm-4.696-4.021c.35.353 2.101.962 5.727.806 3.224-.138 6.624-.839 8.664-1.786 2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577a6.162 6.162 0 01-.54-.401c-.302.119-.581.197-.78.253-1.58.443-3.214.902-2.996 5.105zm-45.562 8.915c-1.752 0-3.596-.239-5.479-.71-1.951-.488-5.24-1.957-5.19-4.37.057-2.707 3.994-3.519 5.476-3.824 5.354-1.103 5.703-1.545 7.376-3.67.488-.619 1.095-1.39 1.923-2.314 1.229-1.376 2.572-2.073 3.992-2.073.989 0 1.8.335 2.336.558 1.708.708 3.133 2.42 3.719 4.467.529 1.847.276 3.625-.71 5.006-3.237 4.533-7.886 6.93-13.443 6.93zm-7.222-4.943c.481.372 1.445.869 2.518 1.137 1.631.408 3.213.615 4.705.615 4.546 0 8.196-1.882 10.847-5.594.553-.774.387-1.757.239-2.274-.31-1.083-1.08-2.068-1.873-2.397-.43-.178-.787-.314-1.115-.314-.176 0-.712 0-1.614 1.009a41.146 41.146 0 00-1.794 2.162c-2.084 2.646-3.039 3.544-9.239 4.821-1.513.31-2.289.626-2.674.835zm12.269-7.36a1.596 1.596 0 01-1.575-1.354 8.218 8.218 0 01-.08-.799c-4.064-.076-7.985-1.82-10.962-4.926-3.764-3.927-5.477-9.368-4.699-14.927.845-6.037.529-11.366.359-14.229-.047-.796-.081-1.371-.079-1.769.003-.505.013-1.844 4.489-4.113 1.592-.807 4.784-2.215 8.271-2.576 5.777-.597 9.585 1.976 10.725 7.246 3.077 14.228.244 20.521-1.825 25.117-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354a1.595 1.595 0 01-1.335 1.819l-.244.02zM42.464 42.26l.062 1.139c.176 2.974.504 8.508-.384 14.86-.641 4.585.759 9.06 3.843 12.276 2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646 1.991-4.424 4.47-9.931 1.615-23.132-.565-2.615-1.936-4.128-4.189-4.627-4.628-1.022-11.525 2.459-12.974 3.837zm9.63-.677c-.08.564 1.033 2.07 2.485 2.271 1.449.203 2.689-.975 2.768-1.539.079-.564-1.033-1.186-2.485-1.388-1.451-.202-2.691.092-2.768.656zm2.818 2.826l-.407-.028c-.9-.125-1.81-.692-2.433-1.518-.219-.29-.576-.852-.505-1.354.101-.736.999-1.177 2.4-1.177.313 0 .639.023.967.069.766.106 1.477.327 2.002.62.91.508.977 1.075.936 1.368-.112.813-1.405 2.02-2.96 2.02zm-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082-.096-.182-.762-.634-2.025-.81a5.823 5.823 0 00-.821-.059c-.812 0-1.243.183-1.345.282zm43.605-1.245c.079.564-1.033 2.07-2.484 2.272-1.45.202-2.691-.975-2.771-1.539-.076-.564 1.036-1.187 2.486-1.388 1.45-.203 2.689.092 2.769.655zm-2.819 2.56c-1.396 0-2.601-1.086-2.7-1.791-.115-.846 1.278-1.489 2.712-1.688.316-.044.629-.066.93-.066 1.238 0 2.058.363 2.14.949.053.379-.238.964-.739 1.492-.331.347-1.026.948-1.973 1.079l-.37.025zm.943-3.013c-.276 0-.564.021-.856.061-1.441.201-2.301.779-2.259 1.089.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919.443-.465.619-.903.598-1.052-.028-.198-.56-.49-1.613-.49zm3.965 32.843a1.594 1.594 0 01-1.324-2.483c3.398-5.075 2.776-10.25 2.175-15.255-.257-2.132-.521-4.337-.453-6.453.07-2.177.347-3.973.614-5.71.317-2.058.617-4.002.493-6.31a1.595 1.595 0 113.186-.172c.142 2.638-.197 4.838-.525 6.967-.253 1.643-.515 3.342-.578 5.327-.061 1.874.178 3.864.431 5.97.64 5.322 1.365 11.354-2.691 17.411a1.596 1.596 0 01-1.328.708z"
        />
      </svg>
    ),
  },
];

export default stack;