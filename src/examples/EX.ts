
console.log('----------------------------- EX.ts ------------------');

require('./car');

/*
import { configuration } from './';
import { BPMNServer, Logger } from './';
import { EventEmitter } from 'events';

const logger = new Logger({ toConsole: true });
const server = new BPMNServer(configuration, logger, { cron: false });
let response;
test197();
async function test197() {

    response=await server.engine.start('Issue197',{});
    
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_create_vote',"items.itemKey":"IT"});
    //response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT1',"items.itemKey":"2"});
    //console.log('items:',response.getItems().filter(item=>{return (item.status=='wait')}).length);

    response=await server.engine.invoke({id:response.id,"items.elementId":'Event_cancel',"items.itemKey":"IT"});
    

    list();
    

    return;
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"1.1001"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"1.1002"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"1.1003"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"2.1001"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"2.1002"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"2.1003"});
    list();
//    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT1',"items.itemKey":"2"});
 //   list();
    return;

}
async function test1() {

    response=await server.engine.start('Issue 196',{});
    
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT1',"items.itemKey":"1"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT1',"items.itemKey":"2"});
    console.log('items:',response.getItems().filter(item=>{return (item.status=='wait')}).length);

    response=await server.engine.invoke({id:response.id,"items.elementId":'Event_Cancel',"items.itemKey":"2"});
    

    list();
    

    return;
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"1.1001"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"1.1002"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"1.1003"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"2.1001"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"2.1002"});
    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT2',"items.itemKey":"2.1003"});
    list();
//    response=await server.engine.invoke({id:response.id,"items.elementId":'Activity_UT1',"items.itemKey":"2"});
 //   list();
    return;

}
function list() {

    response.getItems().forEach(item=>{
        console.log('item:',item.seq,item.elementId,item.itemKey,item.status,item.endedAt);
    });

}*/