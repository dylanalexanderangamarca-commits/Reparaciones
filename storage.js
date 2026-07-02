const DB_KEY = 'cellmarket_pro_v1';
const CellDB = {
  read(){
    const raw = localStorage.getItem(DB_KEY);
    if(raw) return JSON.parse(raw);
    const seed = {orders:[{id:1,client:'Dylan Angamarca',phone:'',brand:'Samsung',model:'A30',status:'RECIBIDO',total:0,paid:0,problem:'',created:new Date().toISOString()}],clients:[{id:1,name:'Dylan Angamarca',phone:'',doc:''}]};
    localStorage.setItem(DB_KEY, JSON.stringify(seed));
    return seed;
  },
  write(data){localStorage.setItem(DB_KEY, JSON.stringify(data));},
  addClient(client){const db=this.read();client.id=Date.now();db.clients.unshift(client);this.write(db);return client;},
  addOrder(order){const db=this.read();order.id=(db.orders[0]?.id||0)+1;order.created=new Date().toISOString();db.orders.unshift(order);if(order.client && !db.clients.some(c=>c.name.toLowerCase()===order.client.toLowerCase())) db.clients.unshift({id:Date.now(),name:order.client,phone:order.phone||'',doc:order.doc||''});this.write(db);return order;}
};
