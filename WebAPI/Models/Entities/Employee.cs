using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.Entities
{
    public class Employee
    {
        public int EmployeeID { get; set; }
        public String FullName { get; set; }
        public String EMPCode { get; set; }
        public String Mobile { get; set; }
        public String Position { get; set; }
    }
}