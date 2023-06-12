<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">Document Name</th>
        <th colspan="2">Received On</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td width="5%" align="left">
          <i>
            <slot name="icon">
              <img src="@/assets/icons/file.svg" />
            </slot>
          </i>
        </td>
        <td width="75%" class="name">
          <slot name="document-name"></slot>
        </td>
        <td width="20%">
          <slot name="date"></slot>
        </td>
        <td width="5%">
          <slot name="action"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table,
tbody {
  width: 100%;
}

thead {
  text-align: left;
}

thead tr th,
tbody tr .name {
  font-weight: bold;
}

tr {
  position: relative;
  height: 60px;
}

tr:after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #d0d2d6;
}

i img {
  display: block;
  width: 16px;
  height: 20px;
  margin-right: 5px;
  /* changes svg to  #493df5  */
  filter: invert(22%) sepia(88%) saturate(6110%) hue-rotate(246deg) brightness(100%) contrast(93%);
}

.title {
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #151f32;
}
</style>
