<template>
  <el-card class="box-card">
    <p>Generate command of BAT file for BitZeny.</p>
      <template v-if="cmdValid">
        <el-alert
          class="validAlert"
          title="Available command"
          type="success"
          show-icon>
        </el-alert>
      </template>
      <template v-if="!cmdValid">
        <el-alert
          class="validAlert"
          title="Uncomplete command"
          type="info"
          show-icon>
        </el-alert>
      </template>
    <div class="bat">
      <span>{{bat}}</span>
      <template v-if="cmdValid">
        <el-button type="success" icon="el-icon-download" @click="download">Download BAT file</el-button>
      </template>
      <template v-if="!cmdValid">
        <el-button type="success" icon="el-icon-download" disabled>Download BAT file</el-button>
      </template>
    </div>
    <el-form ref="form" :model="value" label-width="120px">
      <el-form-item label="Mining Type">
        <el-radio-group v-model="type">
          <el-radio-button label="pool">Pool Mining</el-radio-button>
          <el-radio-button label="solo">Solo Mining</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <template v-if="type === 'pool'">
        <el-form-item label="Pool">
          <el-select v-model="value.pool" placeholder="Please select pool" style="width: 100%">
            <el-option-group
              v-for="group in poollist"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <template v-if="value.pool === 'extra'">
          <el-form-item label="Extra pool">
            <el-input placeholder="Please input pool address" v-model="value.poolExtra"></el-input>
          </el-form-item>
        </template>
      </template>
      <el-form-item label="CPU cores">
        <el-select v-model="value.core" placeholder="Please select number of CPU cores" style="width: 100%">
            <el-option
              v-for="item in core"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
        </el-select>
      </el-form-item>
      <template v-if="type === 'pool'">
        <el-form-item label="Pool Username">
          <el-input placeholder="user" v-model="value.user"></el-input>
        </el-form-item>
        <el-form-item label="Workername">
          <el-input placeholder="worker" v-model="value.worker"></el-input>
        </el-form-item>
      </template>
      <template v-if="type !== 'pool'">
        <el-form-item label="Username">
          <el-input placeholder="user" v-model="value.user"></el-input>
        </el-form-item>
      </template>
      <el-form-item label="Password">
        <el-input placeholder="password" v-model="value.password"></el-input>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import poollist from '../assets/poollist'

export default {
  name: 'Contents',
  methods: {
    download: function () {
      const resultText = this.bat
      const downLoadLink = document.createElement('a')
      downLoadLink.download = 'start.bat'
      downLoadLink.href = URL.createObjectURL(new Blob([resultText], {type: 'text.plain'}))
      downLoadLink.dataset.downloadurl = ['text/plain', downLoadLink.download, downLoadLink.href].join(':')
      downLoadLink.click()
    }
  },
  computed: {
    bat: function () {
      const address = () => {
        if (this.type === 'pool') {
          if (this.value.pool || this.value.poolExtra) {
            return this.value.pool === 'extra' ? ` -o ${this.value.poolExtra}` : ` -o ${this.value.pool}`
          } else {
            return ''
          }
        } else {
          return ` -o localhost:9252`
        }
      }
      const user = () => {
        if (this.value.user) {
          if (this.type === 'pool' && this.value.worker) {
            return ` -u ${this.value.user}.${this.value.worker}`
          } else {
            return ` -u ${this.value.user}`
          }
        } else {
          return ''
        }
      }
      const password = this.value.password ? ` -p ${this.value.password}` : ''
      const core = this.value.core ? ` -t ${this.value.core}` : ''

      return `minerd -a yescrypt${address()}${user()}${password}${core}`
    },
    cmdValid: function () {
      const isPool = () => {
        if (this.type !== 'pool') return true
        if (this.value.pool) {
          if (this.value.pool === 'extra') {
            return (this.value.poolExtra)
          } else {
            return true
          }
        }
      }
      const isUser = (this.value.user)
      const isPassword = (this.value.password)
      return isPool() && isUser && isPassword
    }
  },
  data () {
    return {
      value: {
        pool: '',
        poolExtra: '',
        core: '',
        user: '',
        worker: '',
        password: ''
      },
      type: 'pool',
      poollist,
      core: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
    }
  }
}
</script>

<style scoped>
.bat {
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 20px 30px;
  margin: 20px 0;
  font-size: 24px;
  display: flex;
}
.bat span {
  margin-right: auto;
}
.validAlert {
  margin-top: 20px;
}
</style>
