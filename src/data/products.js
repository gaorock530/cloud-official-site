export default [
  {
    id: 'compute',
    cate: '计算',
    icon: '/assets/home/bg2/bg2-1.png',
    to: '/Compute',
    svg: '/assets/icon/products/compute.svg',
    sub: [
      {
        name:'云服务器',
        desc: '安全稳定，高弹性的计算服务',
        ab: 'CVM',
        to: '/CVM',
        tags: []
      },
      {
        name:'弹性伸缩',
        desc: '自动调整 CVM 计算资源',
        ab: 'AS',
        to: '/AS',
        tags: []
      },
      {
        name:'容器服务',
        desc: '高度可扩展的高性能容器管理服务',
        ab: 'TKE',
        to: '/TKE',
        tags: []
      },
      {
        name:'裸金属服务器',
        desc: '为用户提供的云上物理服务器',
        ab: 'BMS',
        to: '/BMS'
      },
    ]
  },
  {
    id: 'storage',
    cate: '存储',
    to: '/Storage',
    icon: '/assets/home/bg2/bg2-3.png',
    svg: '/assets/icon/products/storage.svg',
    sub: [
      {
        name:'对象存储',
        desc: '可扩展的云端存储',
        ab: 'COS',
        to: '/COS',
        tags: []
      },
      {
        name:'对象存储',
        desc: '分布式存储服务',
        ab: 'CSP',
        to: '/CSP',
        tags: []
      },
      {
        name:'文件存储',
        desc: '可共享的文件存储服务',
        to: '/CFS',
        ab: 'CFS'
      },
      {
        name:'云硬盘',
        desc: '持久性数据块存储设备',
        to: '/CBS',
        ab: 'CBS'
      },
      {
        name:'日志服务',
        desc: '一站式的日志数据解决方案',
        to: '/CLS',
        ab: 'CLS'
      },
    ]
  },
  {
    id: 'database',
    cate: '数据库',
    to: '/Database',
    icon: '/assets/home/bg2/bg2-5.png',
    svg: '/assets/icon/products/database.svg',
    sub: [
      {
        name:'分布式数据库',
        desc: '自动水平拆分、Shared Nothing 架构',
        ab: 'TDSQL',
        to: '/TDSQL',
        tags: []
      },
      {
        name:'弹性缓存数据库',
        desc: '兼容 Redis 协议的分布式缓存和存储服务',
        ab: 'Redis',
        to: '/Redis',
        tags: []
      },
      {
        name:'文档数据库',
        desc: '高性能，分布式，NoSQL数据库服务',
        ab: 'MongoDB',
        to: '/MongoDB',
        tags: []
      },
      {
        name:'分布式云数据库',
        desc: '减少对原有系统的侵入性',
        ab: 'TBase',
        to: '/TBase',
        tags: []
      },
      {
        name:'数据传输服务',
        desc: '提供数据迁移、数据同步、数据订阅于一体',
        ab: 'DTS',
        to: '/DTS',
        tags: []
      },
      {
        name:'时序数据库',
        desc: '分布式、可扩展、支持近实时数据搜索与分析',
        ab: 'CTSDB',
        to: '/CTSDB',
        tags: []
      },
      {
        name:'数据库管理控制台',
        desc: '腾讯云的一款数据库管理工具',
        ab: 'DMC',
        to: '/DMC',
        tags: []
      },
    ]
  },
  {
    id: 'network',
    cate: '网络',
    to: '/NetWork',
    icon: '/assets/home/bg2/bg2-2.png',
    svg: '/assets/icon/products/network.svg',
    sub: [
      {
        name:'负载均衡',
        desc: '对多台云服务器和裸金属服务器进行流量分发',
        ab: 'CLB',
        to: '/CLB',
        tags: []
      },
      {
        name:'私有网络',
        desc: '逻辑隔离网络空间',
        ab: 'VPC',
        to: '/VPC',
        tags: []
      },
      {
        name:'专线接入',
        desc: '专线部署混合云',
        ab: 'DC',
        to: '/DC',
        tags: []
      },
      {
        name:'NAT网关',
        desc: '支持SNAT的大带宽、高可用网关',
        ab: 'NATGW',
        to: '/NATGW',
        tags: []
      },
      {
        name:'弹性网卡',
        desc: '面向云主机的多网卡热插拔服务',
        ab: 'ENI',
        to: '/ENI',
        tags: []
      },
      {
        name:'对等连接网关',
        desc: '打通云上的资源通信链路',
        ab: 'PCGW',
        to: '/PCGW',
        tags: []
      },
      {
        name:'弹性公网 IP',
        desc: '固定不变的公网IP地址',
        ab: 'EIP',
        to: '/EIP',
        tags: []
      },
      {
        name:'弹性公网 IPv6',
        desc: '支持VPC内的IPv6地址通信',
        ab: 'EIPv6',
        to: '/EIPV6',
      },
      {
        name:'VPN连接',
        desc: '通过公网加密通道实现远程访问',
        to: '/IPSECVPN',
      },
    ]
  },
  {
    id: 'middleware',
    cate: '中间件',
    to: '/middleWare',
    icon: '/assets/home/bg2/bg2-4.png',
    svg: '/assets/icon/products/middleware.svg',
    sub: [
      {
        name:'消息队列',
        desc: '分布式消息队列服务',
        to: '/CMQ',
        ab: 'CMQ'
      },
      {
        name:'消息队列',
        desc: '分布式、高吞吐量、高可扩展性',
        to: '/CKAFKA',
        ab: 'CKafka'
      },
      {
        name:'API 网关',
        desc: 'API 全生命周期托管服务',
        to: '/APIGW',
        ab: 'APIGW'
      },
      {
        name:'微服务框架',
        desc: '围绕着应用和微服务的 PaaS 平台',
        to: '/TSF',
        ab: 'TSF'
      },
      {
        name:'分布式事务',
        desc: '分布式事务中间件',
        to: '/DTF',
        ab: 'DTF'
      },
      {
        name:'消息队列',
        desc: '金融级分布式消息中间件',
        to: '/TDMQ',
        ab: 'TDMQ'
      },
    ]
  },
  {
    id: 'security',
    cate: '安全',
    to: '/Security',
    icon: '/assets/home/bg2/bg2-6.png',
    svg: '/assets/icon/products/security.svg',
    sub: [
      {
        name:'Web应用防火墙',
        desc: '基于AI的一站式 Web 业务运营风险防护方案',
        ab: 'WAF',
        to: '/WAF',
        tags: []
      },
      {
        name:'主机安全',
        desc: '帮助企业构建服务器安全防护体系',
        ab: 'CWP',
        to: '/CWP',
      },
      {
        name:'内容安全',
        desc: '过滤不良信息的安全服务',
        ab: 'ContentSecurity',
        to: '/CONTENTSECURITY',
      },
      {
        name:'密钥管理系统',
        desc: '硬件安全模块 HSM（Hardware Security Module） 来生成和保护密钥',
        ab: 'KMS',
        to: '/KMS',
      },
      {
        name:'安全运营中心',
        desc: '打造全网安全态势可知、可见、可控的闭环',
        ab: 'SOC',
        to: '/SOC',
      },
      {
        name:'云加密机',
        desc: '基于国密局认证的物理加密机',
        ab: 'CloudHSM',
        to: '/CLOUDHSM',
      },
      {
        name:'凭据管理系统',
        desc: '轻松实现对敏感凭据的统一管理',
        ab: 'SSM',
        to: '/SSM',
      },
      {
        name:'堡垒机',
        desc: '一体的集中运维管理系统',
        ab: 'BH',
        to: '/BH',
      },
      {
        name:'数据安全审计',
        desc: '各类会话信息、访问操作、SQL 语句进行全量审计入库',
        ab: 'DSAudit',
        to: '/DSAUDIT',
      },
    ]
  },

]
