/**
 * 组件生成器
 * 主要作用统一分发模版中的事件到对应的组件实例中
 */

// 给每个组件生成一个独一的id
// 用于将事件进行分发
let cid = (() => {
    let _cid = 0;
    return () => {
        _cid += 1;
        return _cid;
    }
})();

// 所有组件列表
let cs = [];

// 组件api
let api = {
    // 新生成组件
    new: function (page, config) {
        let _c = this;
        let obj = Object.create(_c);
        obj._page = page;
        obj._dataName = config.dataName;
        obj._cid = cid();
        obj.init(config.data);
        cs.push(obj);
        obj.updateData();
        return obj;
    },
    // 更新该组件的数据
    updateData: function() {
        let data = {};
        this.data = this.data || {};
        this.data.cid = this._cid;
        data[this._dataName] = this.data;
        this._page.setData(data);
    }
}
let component = (c) => {
    // 关键步骤
    // 将组件的所有方法进行代理，方式是在方法名前面添加短杆_
    // 里面根据cid分发到组件示例的方法上去
    Object
        .keys(c)
        .filter((name) => { return typeof c[name] === 'function' && name !== 'init' && name[0] !== '_'})
        .map((name) => {
            let methodName = '_' + name;
            if (!c[methodName]) {
                c[methodName] = c[name];
                c[name] = function (e) {
                    let dataset = e && e.currentTarget && e.currentTarget.dataset || {};
                    let cid = dataset && dataset.cid;
                    cs.filter((_c) => _c._cid === cid)
                        .map((_c) => _c[methodName](dataset));
                };
            }
        });
    let _c = Object.create(api);
    return Object.assign(_c, c);
};

export {component}