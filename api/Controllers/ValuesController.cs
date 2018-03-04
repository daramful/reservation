using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using api.Models;

namespace api.Controllers
{
    [Route("api/[Controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IActionResult GetStatus(){
            return Ok("Should pass 200");
        }

        // GET api/values/{id}
        // Returns 404: Cannot enact this GET function since POST does not save on DB yet
        [HttpGet("/{id}")]
        public IActionResult GetId([FromBody]Body_contents body){
            return Ok("Get: " + body.id);
        }

        // POST api/values/PostId
        // Returns 202: Can "create" Id. However, not posted to DB
        [HttpPost("[Action]")]
        public IActionResult PostId([FromBody]Body_contents body){    
            return Ok("Post: " + body.id);
        }
    }
}
