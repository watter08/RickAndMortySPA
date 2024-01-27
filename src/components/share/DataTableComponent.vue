<!-- <template>
    <div>
      <div class="row" v-if="isFiltered">
        <div class="offset-md-8 col-md-4">
          <div class="form-group pr-3">
            <input v-model="filterText" @keyup="search" type="text" class="form-control me-auto" placeholder="Filtrar Consulta">
          </div>
        </div>
      </div>
      <div class="table-responsive table-responsive-sm table-responsive-md bordered">
        <table class="table table-striped">
          <thead>
            <tr :class="'header ' + tableDesign">
              <th scope="col" class="text-center" v-if="actionsButtons.length > 0">Acción</th>
              <th scope="col" v-for="item in headerThead" :key="item.key">{{ item.value }}</th>
            </tr>
          </thead>
          <tbody v-if="newData.length > 0">
            <tr v-for="(item, index) in pages" :key="index">
              <td class="td-btn" v-if="actionsButtons.length > 0">
                <button
                  v-for="(action, indx) in actionsButtons"
                  :key="'action_' + indx"
                  data-toggle="tooltip"
                  data-placement="top"
                  :title="action.title"
                  @click="action.action(newData.find(dat => dat.GuId === item.GuId))"
                  :class="'btn my-button ' + action.color"
                >
                  <i :class="action.icon + ' icon'"></i>
                </button>
              </td>
              <td v-for="itemKey in Object.keys(item).filter(key => key !== 'GuId')" :key="itemKey">{{ item[itemKey] }}</td>
            </tr>
          </tbody>
        </table>
        <nav :class="paginationToLeft ? 'ml-2' : 'mr-auto'" aria-label="Page navigation example">
          <ul :class="(paginationToLeft ? 'pagination' : 'pagination justify-content-end')">
            <li class="page-item">
              <button type="button" class="page-link" @click="previousPage"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
            </li>
            <li class="page-item" v-if="data.length > 0">
              <button v-for="pageNumber in countPages" type="button" :class="'page-link ' + (curPage === pageNumber ? 'active' : '')" :key="pageNumber"
                @click="setCurrenPage(pageNumber)">{{ pageNumber }}</button>
            </li>
            <li class="page-item">
              <button type="button" @click="nextPage" class="page-link"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </li>
          </ul>
          <div class="text-right me-auto">
            <p>Cantidad Registro:{{ (data && data.length > 0 ? data.length : 0) }}</p>
          </div>
        </nav>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { v4 as uuid } from 'uuid';
  
  export default defineComponent({
    name: 'DataTableComponent',
    props: {
      data: Array,
      headerThead: Array,
      pageSize: Number,
      isFiltered: Boolean,
      actionsButtons: {
        type: Array,
        default: () => []
      },
      tableDesign: {
        type: String,
        default: 'withOut'
      },
      paginationToLeft: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      countPages: [] as number[],
      curPage: 1,
      pages: [] as any[],
      tableData: [] as any[],
      minCount: 1,
      filterText: '',
      newData: [] as any[]
    }),
    created() {
      this.mapData();
    },
    methods: {
      getVisiblePages() {
        const newDataLength = this.tableData.length;
        const lastPage = Math.ceil(newDataLength / this.pageSize);
        const visiblePages: number[] = [];
        let startPage = Math.max(this.curPage - 2, 1);
        let endPage = Math.min(startPage + 4, lastPage);
  
        if (endPage - startPage < 4) {
          startPage = Math.max(endPage - 4, 1);
        }
  
        for (let i = startPage; i <= endPage; i++) {
          visiblePages.push(i);
        }
  
        this.countPages = visiblePages;
      },
      setCurrenPage(pageNumber: number) {
        if (!(this.newData && this.newData.length > 0)) return;
        const maxCount = this.newData.length === this.minCount ? this.minCount : Math.ceil(this.newData.length / this.pageSize);
        const start = (() => {
          let start = Math.max(pageNumber - 5, 1);
          if ((pageNumber + 5) >= maxCount)
            start = (maxCount - 5) <= this.minCount ? 1 : maxCount - 5;
          else if ((pageNumber - 5) <= this.minCount) start = 1;
          else start = pageNumber;
          return start;
        })();
  
        this.curPage = pageNumber;
        this.renderTable();
      },
      mapData() {
        if (!this.newData || !this.newData.length > 0) return;
        const newData = this.newData.map((items: any) => {
          const item: any = {};
          this.headerThead.forEach(({ key }: any) => {
            item[key] = items[key];
          });
          item.GuId = items.GuId;
          return item;
        });
        this.tableData = newData.slice();
      },
      getId() {
        return uuid()();
      },
      previousPage() {
        if (this.curPage > 1) this.curPage--;
        this.setCurrenPage(this.curPage === 0 ? 1 : this.curPage);
        this.getVisiblePages();
      },
      nextPage() {
        if ((this.curPage * this.pageSize) < this.tableData.length) this.curPage++;
        this.setCurrenPage(this.curPage);
        this.getVisiblePages();
      },
      renderTable() {
        const start = (this.curPage - 1) * this.pageSize;
        const endPage = this.curPage * this.pageSize;
        this.pages = this.tableData.filter((row, index) => index >= start && index < endPage);
        this.getVisiblePages();
      },
      search() {
        const value = this.filterText.toLowerCase();
        const newData = this.newData.map((items: any) => {
          const item: any = {};
          this.headerThead.forEach(({ key }: any) => {
            item[key] = items[key];
          });
          item.GuId = items.GuId;
          return item;
        });
  
        this.tableData = newData.filter((item: any) => {
          for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
              const propertyValue = String(item[key]).toLowerCase();
              if (propertyValue.indexOf(value) > -1) {
                return true;
              }
            }
          }
          return false;
        });
  
        this.getVisiblePages();
      }
    },
    watch: {
      data(newVal: any, _: any) {
        if (newVal) {
          this.newData = newVal.map((dats: any) => ({
            ...dats,
            GuId: uuid()()
          }));
        }
      },
      newData() {
        this.mapData();
      },
      tableData() {
        this.setCurrenPage(1);
      }
    }
  });
  </script>
  
  <style scoped>
  .icon {
    font-size: 22px !important;
  }
  
  .bordered {
    border-radius: 15px;
  }
  
  .page-item button {
    width: 50px;
    margin: 1px;
  }
  
  button.page-link {
    display: inline-block;
  }
  
  button.page-link {
    font-size: 20px;
    color: #29b3ed;
  }
  
  button.page-link.active {
    font-size: 20px;
    color: #fff;
    background-color: #29b3ed;
  }
  
  .offset {
    width: 500px !important;
    margin: 20px auto;
  }
  
  .header.withOut {
    background: transparent;
    color: #212529;
    border-top: none;
  }
  
  .header.with {
    background: #212529;
    color: #fff;
    border-top: none;
  }
  
  .td-btn {
    display: flex;
  }
  
  .td-btn .my-button {
    width: 40px;
    height: 35px;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    border: none;
    cursor: pointer;
    position: relative;
    margin-right: 3px;
  }
  
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .btn.my-button.Blue {
    background: #2196f3 !important;
    color: #ffffff;
  }
  
  .btn.my-button.Green {
    background: #009d71;
    color: #ffffff;
  }
  
  .btn.my-button.Red {
    background: #dc3545;
    color: #ffffff;
  }
  
  .btn.my-button.Info {
    background: #6bbef9;
    color: #ffffff;
  }
  
  .btn.my-button.Black {
    background: #0c181c;
    color: #ffffff;
  }
  
  td, thead {
    text-align: center !important;
  }
  
  td {
    font-size: 14px !important;
  }
  </style>
   -->